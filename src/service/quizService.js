
import user from "@/helpers/user.js";

class QuizService {
    async getAllQuizzes() {
        const response = await user.get('quizzes')
        // console.log(response)
        return response.data
    }

    async createQuiz(quiz) {
        const response = await user.post('quizzes', quiz)
        return response.status === 201 ? response.data : null
    }

    async getQuizById(id) {
        const response = await user.get(`quizzes/${id}`)
        return response.status === 200 ? response.data : null
    }

    async updateQuiz(id, quiz) {
        const response = await user.put(`quizzes/${id}`, quiz)
        return response.status === 200 ? response.data : null
    }

    async deleteQuiz(id) {
        const response = await user.delete(`quizzes/${id}`)
        return response.status === 204
    }
}

export default new QuizService()