import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import WriteArticle from './pages/WriteArticle';
import Blogtitles from './pages/Blogtitles';
import RemoveBackground  from './pages/RemoveBackground';
import RemoveObject  from './pages/RemoveObject';
import ReviewResume  from './pages/ReviewResume';
import Community from './pages/Community';
import GenerateImages from './pages/GenerateImages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ai' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='write-article' element={<WriteArticle />} />
        <Route path='blog-titles' element={<Blogtitles />} />
        <Route path='remove-background' element={<RemoveBackground />} />
        <Route path='remove-object' element={<RemoveObject />} />
        <Route path='review-resume' element={<ReviewResume />} />
        <Route path='community' element={<Community />} />
        <Route path='generate-images' element={<GenerateImages />} />
      </Route>
    </Routes>
  );
}

export default App;
