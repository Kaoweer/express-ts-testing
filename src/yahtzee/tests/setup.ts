import mongoose from "mongoose";

// Extend Jest timeout for all tests
jest.setTimeout(30000);

// Connection retry settings
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

/**
 * Connect to MongoDB Docker container
 */
const connectWithRetry = async (retryCount = 0) => {
  try {
    // Use environment variable or default to local Docker container
    const mongoUri =
      process.env.MONGODB_URI || "mongodb://localhost:27017/yahtzee-test";

    await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB Docker container at ${mongoUri}`);
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      console.log(
        `MongoDB connection attempt ${
          retryCount + 1
        } failed. Retrying in ${RETRY_DELAY_MS}ms...`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      return connectWithRetry(retryCount + 1);
    }
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

beforeAll(async () => {
  await connectWithRetry();
});

/**
 * Clear test collections between tests
 * Only clean specific collections used in tests to avoid affecting other data
 */
afterEach(async () => {
  if (mongoose.connection.readyState === 1) {
    // List of collections to clean
    const collectionsToClean = ["scores"]; // Add other test collections as needed

    for (const collectionName of collectionsToClean) {
      if (mongoose.connection.collections[collectionName]) {
        await mongoose.connection.collections[collectionName].deleteMany({});
      }
    }
    console.log("Test collections cleared");
  }
});

/**
 * Close database connection after all tests are done
 */
afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
});

/**
 * Handle unhandled promise rejections
 */
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
