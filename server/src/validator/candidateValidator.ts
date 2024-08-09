import { z } from 'zod';

export const candidateSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email format'),
	appliedDate: z.date().optional(),
});
