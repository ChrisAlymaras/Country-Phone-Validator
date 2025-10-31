This validator accepts the following US formats:

- `1 555-555-5555`
- `1 (555) 555-5555`
- `1(555)555-5555`
- `1 555 555 5555`
- `5555555555`
- `555-555-5555`
- `(555)555-5555`

Adaptability

To support other countries:
- Update the regex patterns in the "acceptedNumberRegex" array.
- Modify the country code logic as needed. e.g +30 for Greece.
- Adjust styling or input hints to reflect regional formats.

---

Getting Started
1. Clone or download the repository.
2. Open "index.html" in your browser.
3. Type a number and click button **Check** to validate.

No dependencies. No build tools. Just clean, client-side code.

As an example I will try validate number 1 (555) 555-5555 and click the check button.

<img width="399" height="557" alt="image" src="https://github.com/user-attachments/assets/e64d2834-7e3d-4882-9f39-7d265f1a4d1f" />

This is a valid US number so I expect same result.

<img width="372" height="557" alt="image" src="https://github.com/user-attachments/assets/eb800bcd-4eae-426e-a0f7-174a832beb7f" />

The output box returns the right message.

This project is made for educational purposes only. Feel free to test it on your own.
