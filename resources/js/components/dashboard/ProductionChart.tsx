import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', production: 2400, ventes: 1800 },
  { month: 'Fév', production: 1398, ventes: 1200 },
  { month: 'Mar', production: 9800, ventes: 8500 },
  { month: 'Avr', production: 3908, ventes: 3200 },
  { month: 'Mai', production: 4800, ventes: 4100 },
  { month: 'Juin', production: 3800, ventes: 3500 },
  { month: 'Juil', production: 4300, ventes: 4000 },
];

export function ProductionChart() {
  return (
    <div className="rounded-xl bg-card p-6 shadow-md">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Production vs Ventes
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(152, 45%, 28%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(152, 45%, 28%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorVentes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(36, 80%, 50%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(36, 80%, 50%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(140, 15%, 88%)" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: 'hsl(150, 15%, 45%)', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(140, 15%, 88%)' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(150, 15%, 45%)', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(140, 15%, 88%)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(140, 15%, 88%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="production" 
              stroke="hsl(152, 45%, 28%)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorProduction)" 
              name="Production (kg)"
            />
            <Area 
              type="monotone" 
              dataKey="ventes" 
              stroke="hsl(36, 80%, 50%)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorVentes)" 
              name="Ventes (kg)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}