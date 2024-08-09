// /src/controllers/questionController.ts

import { Request, Response } from 'express';
import Question from '../models/questionModel';

// Create a new question
export const createQuestion = async (req: Request, res: Response) => {
	try {
		const question = new Question(req.body);
		await question.save();
		res.status(201).json(question);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error: 'An unexpected error occurred.' });
		}
	}
};

// Get all questions
export const getQuestions = async (req: Request, res: Response) => {
	try {
		const questions = await Question.find();
		res.status(200).json(questions);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error: 'An unexpected error occurred.' });
		}
	}
};

// Get a single question by ID
export const getQuestionById = async (req: Request, res: Response) => {
	try {
		const question = await Question.findById(req.params.id);
		if (!question) {
			return res.status(404).json({ message: 'Question not found' });
		}
		res.status(200).json(question);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error: 'An unexpected error occurred.' });
		}
	}
};

// Update a question by ID
export const updateQuestion = async (req: Request, res: Response) => {
	try {
		const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!question) {
			return res.status(404).json({ message: 'Question not found' });
		}
		res.status(200).json(question);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error: 'An unexpected error occurred.' });
		}
	}
};

// Delete a question by ID
export const deleteQuestion = async (req: Request, res: Response) => {
	try {
		const question = await Question.findByIdAndDelete(req.params.id);
		if (!question) {
			return res.status(404).json({ message: 'Question not found' });
		}
		res.status(200).json({ message: 'Question deleted successfully' });
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error: 'An unexpected error occurred.' });
		}
	}
};
