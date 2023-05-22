import { Card } from "flowbite-react";
import React from "react";

const Blogs = () => {
  return (
    <div className="my-8">
      <Card className="my-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Access tokens and refresh tokens are commonly used in authentication
          and authorization systems. Access token use for save API header from
          anonymous user. And the other hand refresh token use for get new
          access token.
        </p>
      </Card>
      <Card className="my-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Compare SQL and NoSQL databases?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems that differ in their data models, querying languages, and usage scenarios. <br />       
        Here is a comparison between SQL and NoSQL databases:
        <br />
        Data Model:
        <br />
        <strong>SQL: </strong>
       
        SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using foreign keys.
        <br />
        <strong>NoSQL: </strong>
        NoSQL databases provide a flexible data model that can vary between different databases. They typically use a key-value, document, columnar, or graph-based model.
        </p>
      </Card>
      <Card className="my-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What is express js? What is Nest JS ?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Express js is a minimalist web framework for node.js . Express.js make very easy to the process of handling HTTP requests, routing, middleware integration, and managing server-side logic. Nest JS is a progressive nodejs framework. It build for efficient, scalable, and maintainable server-side applications.
        </p>
      </Card>
      <Card className="my-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What is MongoDB aggregate and how does it work ?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        MongoDB aggregation is a powerful tool for performing advanced data processing and analysis tasks within the MongoDB database. It is use for a doc grouping, sorting, filtering, transfer etc.
        </p>
      </Card>
    </div>
  );
};

export default Blogs;
