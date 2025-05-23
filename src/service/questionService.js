import user from "@/helpers/user.js";

class QuestionService {
    async getAllQuestions() {
        const response = await user.get("questions");
        return response.data;
    }

    async getQuestionById(id) {
        const response = await user.get(`questions/${id}`);
        return response.status === 200 ? response.data : null;
    }

/* <<<<<<<<<<<<<<  ✨ Windsurf Command ⭐ >>>>>>>>>>>>>>>> */
    /**
     * Create a new question in the database.
     * @param {Object} question - Question to be created. Must have keys "text", "questionType", "points", and "quizId".
     * @returns {Promise<Object | null>} - New question object with id, or null if the server returned a non-201 response.
     */
/* <<<<<<<<<<  612d176d-9d6f-4ec6-8719-d316c4981334  >>>>>>>>>>> */
    async createQuestion(question) {
        const response = await user.post("questions", question);
        return response.status === 201 ? response.data : null;
    }

    async updateQuestion(id, question) {
        const response = await user.put(`questions/${id}`, question);
        return response.status === 200 ? response.data : null;
    }

    async deleteQuestion(id) {
        const response = await user.delete(`questions/${id}`);
        return response.status === 204;
    }
}

export default new QuestionService();
