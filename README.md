# Product Design Portfolio Template

This project started as a personal portfolio I designed and developed to showcase my work as a product designer. As I was working on it, I realized other designers might benefit from having a similar template to quickly and easily create their own portfolios. So here it is — now available for anyone to use and customize! 🎉

This easy-to-use portfolio template showcases my work. Built with Vue.js, it’s ideal for designers looking to present their projects in an engaging and professional way.

> Note: You don’t need advanced coding experience to use this template. Basic knowledge of HTML, CSS, and some JavaScript is enough to get started.

## Table of Contents

- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Project Template Component](#project-template-component)
- [FAQs](#faqs)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)


## Live Demo

Check out a [live demo](https://isasimo.site) of the portfolio template.

## Features

- **HTML/CSS/JavaScript**: A solid foundation for web compatibility.
- **Vite Integration**: Fast local development environment (optional).
- **Responsive Design**: Optimized for various screen sizes.
- **Easy Customization**: Modify components to fit your personal style.
- **Project Templates**: Easily add and manage your projects.

## Project Structure

```bash
portfolio/
├── assets/
│   ├── p_project1/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   ├── p_project2/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   ├── ...
├── components/
│   └── About.vue
│   └── Experience.vue
│   └── Footer.vue
│   └── Header.vue
│   └── Home.vue
│   └── Project1.vue
│   └── Project2.vue
│   └── Project3.vue
│   └── ProjectTemplate.vue
│   └── SocialMedia.vue
├── src/
│   └── photoSwipeMixin.js
│   └── scrollAnimations.js
│   └── style.css
├── .gitignore
├── App.vue
├── index.html
└── LICENSE
├── main.js
├── package.json
├── README.md
├── router.js
├── vite.config.js
```

## How to use

### 1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/product-design-portfolio.git
   cd product-design-portfolio
   ```

### 2. Install dependencies & start local development:

If you want to develop locally, use Vite for a fast setup:

   ```bash
   npm install # Install dependencies
   npm run dev # Start local server
   ```

### 3. **Customize your portfolio:**

- **Herader:** Edit `Header.vue` to add your favicon and change your name and picture.
- **Footer:** Edit `Footer.vue` to include your email or a call-to-action.
- **Home:** Edit `Home.vue` with your introduction, project thumbnails, and descriptions.
- **About:** Personalize `About.vue` to share more about yourself and your story.
- **Experience:** Edit `Experience.vue` to include your most recent roles and accomplishments.
- **SocialMedia:** Edit `SocialMedia.vue` to add social media links.

To add and edit individual projects, refer to the [Project Template Component](#project-template-component) section below.

### 4. **Build the project for production:**

Once you've customized your portfolio, build the project for deployment:

   ```bash
   npm run build  # Generates the dist folder for production
   ```

### 5. **Deploy the Portfolio:**

**Option 1: Deploy to Your Own Server**
1. Upload the contents of the dist folder to your web server.
2. Ensure your server is configured to serve static files.

> **Note:** If you're deploying this project on an Apache server, you may encounter "Not Found" errors for routes like `/about`, `/projects`, etc., due to the nature of Single Page Applications (SPA). To solve that, add an `.htaccess` file (a template is found in the project) or type the following content and upload it to the root of your deployed project:
  
  ```bash
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
**Option 2: Deploy via GitHub Pages**
1. Follow the instructions for setting up [Github Pages](https://pages.github.com/)
2. You can automate the deployment with the following command using `gh-pages` (if the project is already built):

```bash
npm install gh-pages --save-dev
npm run deploy
```
   
This command builds the project and deploys it directly to your GitHub Pages.

:boom: Boom! Your portfolio is online, it was that easy!

## Project Template Component

The `ProjectTemplate.vue` component serves as the foundation for creating new project entries in your portfolio.

### Usage

1. Copy `ProjectTemplate.vue` to the components directory.
2. Rename the file to reflect the project’s name.
3. Update router.js to create a new route for the project.
4. Customize the sections. You can add more or remove them depending on your needs. Here are the sections provided in the template.
   
<img src="https://github.com/user-attachments/assets/2b18a827-ed20-47be-8de0-353e6da6e7dd" width="600" alt="Project template sections" />

## FAQs

**Do I need to have a GitHub account to use this template?**  
No, you don’t need a GitHub account to download the repository or deploy it to your own server. But, if you want to clone, fork, or contribute to the repository, then a GitHub account is required.

**Can I use a different deployment method other than GitHub Pages?**  
Absolutely! You can deploy the built `dist` folder to any static site hosting service like Netlify, Vercel, or your own server.

**How do I add more sections to my portfolio?**  
You can add new Vue components and update the router to include additional pages or sections as needed.

**Do I need to know coding to use this portfolio?**  
No advanced coding experience is needed. Basic knowledge of **HTML**, **CSS**, and some **JavaScript** is sufficient for customization.

## Contributions

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License?useskin=vector) - see the [LICENSE](https://github.com/isasimo/Portfolio/blob/main/LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [designwithisa@gmail.com](mailto:designwithisa@gmail.com)
- **LinkedIn**: [isabelsimo](https://www.linkedin.com/in/isabelsimo/)
- **X**: [@isasimo](https://x.com/isasimo)

