module.exports = ( html ) => {
   console.log(html)
   
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          </style>
       </head>
       <body>
          <div>
             ${html}
                  
          </div>
       </body>
    </html>
    `;
};