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
