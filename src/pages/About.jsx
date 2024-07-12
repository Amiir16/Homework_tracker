import React from 'react';

const About = () => {
    return (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-gray-100 rounded-md">
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">About Homework Tracer</h1>
            <p className="text-lg text-gray-800">
                Homework Tracer is an application designed to help students track their homework assignments effectively.
            </p>
            <p className="text-lg text-gray-800">
                Features include:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li className="text-gray-800">Adding new homework tasks with subject and description.</li>
                <li className="text-gray-800">Editing existing homework tasks.</li>
                <li className="text-gray-800">Deleting homework tasks when completed.</li>
            </ul>
            <p className="text-lg text-gray-800 mt-4">
                This application aims to streamline homework management, ensuring students stay organized and on top of their assignments.
            </p>
        </div>
    );
};

export default About;
