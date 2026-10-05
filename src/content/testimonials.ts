/**
 * Customer testimonials and results.
 *
 * Leave this empty until Tranzit supplies a genuine quote with the customer's permission.
 * The homepage only shows the testimonial block when at least one entry exists.
 * Never add placeholder or invented quotes here.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company: string;
  /** Optional measurable result, e.g. "Cut label printing from 2 hours to 10 minutes a day". */
  result?: string;
};

export const testimonials: Testimonial[] = [];
