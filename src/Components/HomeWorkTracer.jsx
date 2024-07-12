import React, { useState, useEffect } from 'react';

const HomeworkTracer = () => {
    const [homeworks, setHomeworks] = useState(() => {
        const storedHomeworks = localStorage.getItem('homeworks');
        return storedHomeworks ? JSON.parse(storedHomeworks) : [];
    });
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [selectedHomework, setSelectedHomework] = useState(null);
    const [nextId, setNextId] = useState(() => {
        const storedHomeworks = localStorage.getItem('homeworks');
        return storedHomeworks ? JSON.parse(storedHomeworks).length + 1 : 1;
    });

    useEffect(() => {
        localStorage.setItem('homeworks', JSON.stringify(homeworks));
    }, [homeworks]);

    const addHomework = () => {
        if (subject.trim() !== '' && description.trim() !== '') {
            const newHomework = {
                id: nextId,
                subject: subject,
                description: description
            };
            setHomeworks([...homeworks, newHomework]);
            setSubject('');
            setDescription('');
            setNextId(nextId + 1);
        }
    };

    const deleteHomework = (id) => {
        setHomeworks(homeworks.filter(homework => homework.id !== id));
    };

    const updateHomework = () => {
        if (selectedHomework && subject.trim() !== '' && description.trim() !== '') {
            setHomeworks(homeworks.map(homework =>
                homework.id === selectedHomework.id ? { ...homework, subject: subject, description: description } : homework
            ));
            setSelectedHomework(null);
            setSubject('');
            setDescription('');
        }
    };

    return (
        <div className="max-w-3xl mx-auto my-8 space-y-4 bg-gray-500 p-6 rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Homework Tracer</h1>
            <div className="mb-4 flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-2">
                <input
                    type="text"
                    className="border border-gray-400 p-2 mr-2 flex-1"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <input
                    type="text"
                    className="border border-gray-400 p-2 mr-2 flex-1"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {!selectedHomework ? (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        onClick={addHomework}
                    >
                        Add Homework
                    </button>
                ) : (
                    <div>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-2"
                            onClick={updateHomework}
                        >
                            Update Homework
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                            onClick={() => setSelectedHomework(null)}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
            <div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-2 lg:px-4 py-2">ID</th>
                            <th className="border px-2 lg:px-4 py-2">Subject</th>
                            <th className="border px-2 lg:px-4 py-2">Description</th>
                            <th className="border px-2 lg:px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {homeworks.map(homework => (
                            <tr key={homework.id} className="border">
                                <td className="border px-2 lg:px-4 py-2">{homework.id}</td>
                                <td className="border px-2 lg:px-4 py-2">{homework.subject}</td>
                                <td className="border px-2 lg:px-4 py-2">{homework.description}</td>
                                <td className="px-2 lg:px-4 py-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2"
                                        onClick={() => setSelectedHomework(homework)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                                        onClick={() => deleteHomework(homework.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomeworkTracer;
