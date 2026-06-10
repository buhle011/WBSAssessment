// Factory helper used to generate request payload data for posts API tests.
// The userId parameter allows tests to create distinct payloads for each scenario.
export class PostPayloads {
    static getRandomResource(userId: number) {
        return {
            title: `Test post for user ${userId}`,
            body: `This is a test body for user ${userId}`,
            userId
        };
    }
}
