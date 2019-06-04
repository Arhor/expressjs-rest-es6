import express from 'express';
import route from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',     route.users);
app.use('/galleries', route.galleries);
app.use('/photos',    route.photos);
app.use('/courses',   route.courses);
app.use('/comments',  route.comments);

export default app;
