const app = require('./express/app');



app.listen(3000, () => {
    console.log(`----------------------------------------------`);
    console.log(`🚀 Server running on http://localhost:3000/`);
    console.log(`----------------------------------------------`);
  });