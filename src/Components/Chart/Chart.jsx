import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const subMarksData = [
        {
            "id": 1,
            "name": "John",
            "physics": 85,
            "math": 90,
            "chemistry": 80
        },
        {
            "id": 2,
            "name": "Alice",
            "physics": 75,
            "math": 88,
            "chemistry": 92
        },
        {
            "id": 3,
            "name": "Michael",
            "physics": 92,
            "math": 85,
            "chemistry": 78
        },
        {
            "id": 4,
            "name": "Emily",
            "physics": 80,
            "math": 78,
            "chemistry": 85
        },
        {
            "id": 5,
            "name": "David",
            "physics": 88,
            "math": 92,
            "chemistry": 90
        }
    ]

    return (
        <div className='flex justify-center'>
            <LineChart width={800} height={400} data={subMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="black" />
                <Line dataKey="physics" stroke="green" />
                <Line dataKey="chemistry" stroke="blue" />
            </LineChart>
        </div>
    );
};

export default Chart;