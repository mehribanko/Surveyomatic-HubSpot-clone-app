module.exports = (survey) => {
    return `
        <html>
            <head>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        line-height: 1.6;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        margin: 0;
                        padding: 0;
                    }

                    div {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        color: #3498db;
                    }

                    h3 {
                        color: #555;
                    }

                    p.question {
                        margin: 20px 0;
                        font-size: 18px;
                        font-weight: bold;
                        color: #3498db; /* Darker blue color for the question */
                    }

                    .button-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    .button-container a {
                        display: inline-block;
                        padding: 12px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        margin: 0 10px;
                        font-size: 16px;
                        transition: background-color 0.3s ease;
                    }

                    .button-container a.yes {
                        background-color: #2ecc71; /* Green color for "Yes" */
                        color: #fff;
                    }

                    .button-container a.no {
                        background-color: #c0392b; /* Dark red color for "No" */
                        color: #fff;
                    }

                    .button-container a:hover {
                        opacity: 0.8;
                    }
                </style>
            </head>
            <body>
                <div>
                    <h1>We'd like to know what you think &#128512;</h1>
                    <h3>Please, answer the following question:</h3>

                    <p class="question">${survey.body}</p>
                    <div class="button-container">
                        <a href="http://localhost:3000" class="yes">Yes</a>
                        <a href="http://localhost:3000" class="no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};
