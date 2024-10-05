# PicStash

## Description

here's a short summary of Picstash
- What: A website for image uploading and sharing, similar to Google Drive but with a visual focus like Pinterest.
  
- Why: To provide users with a platform to store, organize, and share their images online. This combines the file storage functionality of Google Drive with the visual browsing experience of Pinterest.
  
- How: The website will feature:
* User authentication (login system)
* Image upload functionality
* Visual grid layout for browsing images (Pinterest-style)
* Possibly categories or tags for organizing uploads
* Sharing capabilities

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## To create this project, you'll need to develop a web application with a backend for user management and file storage, and a frontend for the user interface. You might use technologies like:

### Database: PostgreSQL, MongoDB, or another database for storing user info and image metadata

### File Storage: Amazon S3, Google Cloud Storage, or a similar service for storing the actual image files

### Frontend: React, Vue.js, or another modern JavaScript framework for the user interface

### Authentication: JWT, OAuth, or another secure authentication method

## Installation

## Installation

Follow these steps to set up the project with Next.js and Prisma ORM:

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Set up Next.js**
   If you haven't already created a Next.js project, you can do so with:
   ```
   npx create-next-app@latest .
   ```
   Follow the prompts to configure your project.

4. **Install Prisma**
   ```
   npm install prisma --save-dev
   ```

5. **Initialize Prisma**
   ```
   npx prisma init
   ```

6. **Configure your database**
   Open the `.env` file and set your database connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
   ```
   Replace with your actual database credentials.

7. **Define your Prisma schema**
   Edit `prisma/schema.prisma` to define your data model.

8. **Generate Prisma Client**
   ```
   npx prisma generate
   ```

9. **Run database migrations**
   ```
   npx prisma migrate dev --name init
   ```

10. **Install Prisma Client**
    ```
    npm install @prisma/client
    ```

11. **Create a Prisma instance file**
    Create a new file `lib/prisma.ts` (or `lib/prisma.js` if not using TypeScript):
    ```typescript
    import { PrismaClient } from '@prisma/client'

    let prisma: PrismaClient

    if (process.env.NODE_ENV === 'production') {
      prisma = new PrismaClient()
    } else {
      if (!global.prisma) {
        global.prisma = new PrismaClient()
      }
      prisma = global.prisma
    }

    export default prisma
    ```

12. **Start the development server**
    ```
    npm run dev
    ```

Your Next.js application with Prisma ORM should now be set up and running at `http://localhost:3000`.

## Usage

To use our image upload website:

1. **Sign Up/Login**: 
   - Navigate to the homepage and click on the "Sign Up" button.
   - If you already have an account, click on "Login".
   - Enter your credentials and submit.

2. **Upload Images**:
   - Once logged in, click on the "Upload" button.
   - Select the image(s) you want to upload from your device.
   - Add a title and description (optional) for each image.
   - Click "Upload" to finish the process.

3. **Organize Images**:
   - Create albums by clicking on "New Album" and giving it a name.
   - Drag and drop images into albums to organize them.
   - Use tags to categorize your images for easier searching.

4. **Share Images**:
   - Click on an image to open it.
   - Use the "Share" button to get a shareable link.
   - You can also set privacy settings for each image or album.

5. **Browse and Discover**:
   - Use the search bar to find specific images or tags.
   - Explore the "Discover" section to see popular uploads from other users.

Remember to respect copyright and only upload images you have the right to share.

## Credits

This project wouldn't have been possible without the following open-source projects and resources:

- [Next.js](https://nextjs.org/) - The React framework for production
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open source object-relational database system
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Dropzone](https://react-dropzone.js.org/) - Simple React hook to create a HTML5-compliant drag'n'drop zone for files
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js

Special thanks to the open-source community and all the contributors who have helped shape this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) [2024] [Moh. Yusril Prayoga]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

