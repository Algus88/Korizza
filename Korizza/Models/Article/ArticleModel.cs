﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Korizza.Models.Article
{
    public class ArticleModel
    {
        public int Id { get; set; }
        public string  Title { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }       
        public int UserId { get; set; }

    }

}
