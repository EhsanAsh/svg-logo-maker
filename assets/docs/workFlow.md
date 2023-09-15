![Ehsan@sh](../image/Favicon.ico)

# User Story

> AS a freelance web developer,
> *I WANT* to generate a simple logo for my projects,
> *SO THAT* I don't have to pay a graphic designer.

---

# Acceptance Criteria

### GIVEN a command-line application that accepts user input,

- *WHEN I* am prompted for text,
  *THEN I* can enter up to three characters.
- *WHEN I* am prompted for the text color,
  *THEN I* can enter a color keyword (OR a hexadecimal number).
- *WHEN I* am prompted for a shape,
  *THEN I* am presented with a list of shapes to choose from: circle, triangle, and square.
- *WHEN I* am prompted for the shape's color,
  *THEN I* can enter a color keyword (OR a hexadecimal number).
- *WHEN I* have entered input for all the prompts,
  *THEN* an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line.
- *WHEN I* open the `logo.svg` file in a browser,
  *THEN I* am shown a 300x200 pixel image that matches the criteria I entered.

---

# Algorithm:

> 1. Start the command-line application.
> 2. Prompt the user to enter text (up to three characters).
> 3. Prompt the user for text color, accepting either a color keyword or a hexadecimal number.
> 4. Display a list of shapes (circle, triangle, square) and prompt the user to choose one.
> 5. Prompt the user for the chosen shape's color, accepting either a color keyword or a hexadecimal number.
> 6. Process the user input to generate a logo using the provided details.
> 7. Create an SVG file named logo.svg based on user input.
> 8. Print the output text "Generated logo.svg" in the command line.

--- 

## Tasks:

### Development Phase:

- Set up the command-line application environment.
- Design prompts to get information on text, text color, shape, and shape color.
- Create a function to validate the user's text input (ensure it's up to three characters).
- Implement a color validation function for text color and shape color.
- Develop a function to generate a logo using user input.
- Ensure that the generated SVG matches the 300x200 pixel size criteria.

### Testing Phase:

- Ensure the command-line application runs without errors.
- Test the text input prompt to ensure it accepts only up to three characters.
- Check color input for both text and shape to ensure it accepts only valid color keywords or hexadecimal values.
- Test the shape selection prompt to ensure it presents the correct options and captures the user's choice.
- Verify that the logo.svg file is generated correctly and matches the user's criteria.
- Open the logo.svg file in different browsers to ensure consistent rendering.

### Deployment Phase:

- Document the process to initiate and use the command-line application.
- Ensure cross-compatibility across different operating systems.
- Implement error handling and logging for unforeseen input and generation issues.
- Package the application for easy distribution and usage.
- Monitor for user feedback and iterate on the application based on their experiences.

---

## Pattern Recognition:

> This problem exemplifies the pattern of interactive content generation based on specific user input. It combines basic input validation, graphical content creation, and file handling operations, commonly seen in tools aimed at simplifying creative tasks for non-designers.

---

## PseudoCode:

### Procedure for starting the application

`Procedure START_APPLICATION
DISPLAY command-line interface
PROMPT user for text (up to three characters)
VALIDATE text input
PROMPT user for text color (accepting color keyword or hexadecimal)
VALIDATE color input
DISPLAY list of shapes: circle, triangle, square
PROMPT user to choose a shape
PROMPT user for shape color (accepting color keyword or hexadecimal)
VALIDATE shape color input
GENERATE logo based on user input
SAVE the logo to a file named `logo.svg`
DISPLAY message "Generated logo.svg" in the command-line interface
End Procedure`

### Main program

`CALL START_APPLICATION
WHILE application is running
    IF user wishes to restart the process
        REDIRECT to the START_APPLICATION procedure
    END IF
    IF user wishes to exit
        EXIT the application
    END IF
END WHILE`