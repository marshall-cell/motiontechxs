const lessons = {
  "Scratch": {
    title: "Your first Scratch animation",
    description: "Use visual blocks to make your character move and respond.",
    file: "motion.sb3",
    code: 'When green flag clicked\nMove 10 steps\nRepeat 10\n  Move 10 steps\n  Wait 0.1 seconds'
  },
  "Python": {
    title: "Your first Python program",
    description: "Learn how to store a value and display a message on screen.",
    file: "hello.py",
    code: 'name = "Coder"\nprint("Hello, " + name + "!")'
  },
  "JavaScript": {
    title: "Make the browser say hello",
    description: "Create a variable and write a message to the browser console.",
    file: "hello.js",
    code: 'const name = "Coder";\nconsole.log(`Hello, ${name}!`);'
  },
  "HTML & CSS": {
    title: "Build your first web page",
    description: "Add a heading and style it with CSS.",
    file: "index.html",
    code: '<h1 class="title">Hello, Coder!</h1>\n\n<style>\n.title { color: #4779ff; }\n</style>'
  },
  "Java": {
    title: "Run a Java greeting",
    description: "Use the main method to print text from a Java program.",
    file: "Main.java",
    code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Coder!");\n  }\n}'
  },
  "C++": {
    title: "Print with C++",
    description: "Send a message to the console with the standard output stream.",
    file: "main.cpp",
    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, Coder!";\n  return 0;\n}'
  },
  "C#": {
    title: "Write your first C# statement",
    description: "Create a C# console app and print a welcome message.",
    file: "Program.cs",
    code: 'Console.WriteLine("Hello, Coder!");'
  }
};

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".language-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelector(".language-pill.active")?.classList.remove("active");
    pill.classList.add("active");
    const lesson = lessons[pill.dataset.language];
    document.querySelector("#lesson-title").textContent = lesson.title;
    document.querySelector("#lesson-description").textContent = lesson.description;
    document.querySelector("#file-name").textContent = lesson.file;
    document.querySelector("#lesson-code").textContent = lesson.code;
  });
});

document.querySelector(".copy-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  await navigator.clipboard.writeText(document.querySelector("#lesson-code").textContent);
  button.textContent = "Copied!";
  setTimeout(() => { button.textContent = "Copy code"; }, 1400);
});

const modal = document.querySelector(".challenge-modal");
document.querySelector(".challenge-button").addEventListener("click", () => modal.showModal());
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
document.querySelector(".modal-check").addEventListener("click", () => {
  document.querySelector(".modal-result").textContent = "Great start! Next, print: \"Hello, \" + name";
});
