import user from "@/helpers/user.js";

const ChoiceService = {
    async createChoice(choice) {
        try {
            const response = await user.post("/choices", choice);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async getChoices() {
        try {
            const response = await user.get("/choices");
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async deleteChoice(id) {
        try {
            const response = await user.delete(`/choices/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async getChoicesById(id) {
        const response = await user.get(`choices/${id}`);
        return response.status === 200 ? response.data : null;
    },

    async updateChoice(id, choice) {
        try {
            const response = await user.put(`/choices/${id}`, choice);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default ChoiceService;
