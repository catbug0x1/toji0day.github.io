import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Activity = () => {
  const activityData = [
    { name: 'Coding', value: 26 },
    { name: 'Research', value: 6 },
    { name: 'Communication', value: 41 },
    { name: 'Entertainment', value: 13 },
    { name: 'Gaming', value: 11 },
    { name: 'Other', value: 3 },
  ];

  const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const timelineData = [
    { time: '18:00', Keypresses: 200, 'Mouse Movement': 150, 'Middle Clicks': 5, 'Right Clicks': 20, 'Left Clicks': 30 },
    { time: '21:00', Keypresses: 300, 'Mouse Movement': 200, 'Middle Clicks': 8, 'Right Clicks': 25, 'Left Clicks': 40 },
    { time: '00:00', Keypresses: 800, 'Mouse Movement': 600, 'Middle Clicks': 15, 'Right Clicks': 50, 'Left Clicks': 70 },
    { time: '03:00', Keypresses: 100, 'Mouse Movement': 80, 'Middle Clicks': 2, 'Right Clicks': 10, 'Left Clicks': 15 },
    { time: '06:00', Keypresses: 400, 'Mouse Movement': 300, 'Middle Clicks': 10, 'Right Clicks': 30, 'Left Clicks': 45 },
    { time: '09:00', Keypresses: 600, 'Mouse Movement': 450, 'Middle Clicks': 12, 'Right Clicks': 40, 'Left Clicks': 60 },
    { time: '12:00', Keypresses: 500, 'Mouse Movement': 350, 'Middle Clicks': 9, 'Right Clicks': 35, 'Left Clicks': 50 },
    { time: '15:00', Keypresses: 200, 'Mouse Movement': 150, 'Middle Clicks': 4, 'Right Clicks': 15, 'Left Clicks': 25 },
  ];

  return (
    <div className="text-green-400">
      <h1 className="text-3xl font-bold mb-8">My Activity</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Activity Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {activityData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Activity Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xl mb-2">Left Clicks</p>
              <p className="text-3xl font-bold">422k</p>
            </div>
            <div>
              <p className="text-xl mb-2">Right Clicks</p>
              <p className="text-3xl font-bold">355k</p>
            </div>
            <div>
              <p className="text-xl mb-2">Middle Clicks</p>
              <p className="text-3xl font-bold">7,820</p>
            </div>
            <div>
              <p className="text-xl mb-2">Keypresses</p>
              <p className="text-3xl font-bold">1.14m</p>
            </div>
            <div>
              <p className="text-xl mb-2">Mouse Movement</p>
              <p className="text-3xl font-bold">446k feet</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Activity Timeline (past 24 hours)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={timelineData}>
            <XAxis dataKey="time" stroke="#4ade80" />
            <YAxis stroke="#4ade80" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Legend />
            <Line type="monotone" dataKey="Keypresses" stroke="#8884d8" />
            <Line type="monotone" dataKey="Mouse Movement" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Middle Clicks" stroke="#ffc658" />
            <Line type="monotone" dataKey="Right Clicks" stroke="#ff7300" />
            <Line type="monotone" dataKey="Left Clicks" stroke="#0088fe" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;