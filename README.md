# summative_assessment_one_group_25

### Online Survey Form Development Report

**Introduction**

The project involved developing an online survey form with specific requirements for field validation, aesthetics, and user interaction. The form was designed to collect user data through fields such as age, email, feedback, rating, and survey date, each with specific validation rules. This report outlines the approach taken, challenges encountered, and solutions implemented during the development process.

**Development Approach**

1. **HTML Structure:**

   - Created a basic form layout with necessary input fields.
   - Ensured semantic HTML was used for better accessibility and SEO.

2. **CSS Styling:**

   - Applied modern CSS styling to ensure the form was visually appealing.
   - Used responsive design principles to make the form usable on different devices.

3. **JavaScript Validation:**

   - Implemented client-side validation using JavaScript.
   - Used regular expressions to validate inputs like email and restricted characters in feedback.

4. **Error Handling:**

   - Modified the form to display error messages dynamically in the DOM instead of using alert boxes.

5. **Submission Handling:**
   - Configured the form to display a success message upon successful validation of all inputs.

**Challenges and Solutions**

1. **Responsive Design:**

   - **Challenge:** Ensuring the form looked good on all devices, especially on very narrow screens.
   - **Solution:** Used media queries to adjust padding and layout dynamically based on screen width.

2. **Date Input Customization:**

   - **Challenge:** The default HTML date picker was inconsistent across browsers and did not fit the design scheme.
   - **Solution:** Applied custom styles to enhance the appearance and ensured it displayed a consistent placeholder text across all platforms.

3. **Error Message Display:**

   - **Challenge:** Initially, error messages were using `alert()`, which was intrusive and disrupted user experience.
   - **Solution:** Changed the implementation to insert error messages into the DOM, which made the form more user-friendly and allowed users to correct inputs without losing the context of the form.

4. **Form Validation Logic:**
   - **Challenge:** Ensuring robust validation that is both secure and efficient on the client side.
   - **Solution:** Used regular expressions for concise and effective validation and handled edge cases to prevent form misuse.
