import "react";
import {Card, Space, Typography} from "antd";

export default function AnalyticsCard({title, values, icon}: {title: string, values: any, icon?: React.ReactNode}) {
  return (
    <Card hoverable className="analytics-card" >
      {/* {icon && <Card.Meta avatar={icon} title={title} />} */}
      <Space size="middle" style={{ display: 'flex', alignItems: 'center' }} >
        <Typography.Title type="secondary" level={4} style={{color: '#7e7b7b', margin: 0 }} >
            {title}
        </Typography.Title>
        {icon}
      </Space>

      <Space>{}</Space>
      <Space style={{ display: 'flex', alignItems: 'center',marginBottom: 0, padding: 0 }} >
        <Typography.Text style={{ color: '#ffffff', fontSize: '3.5em', fontWeight: 'bold', padding: 0, margin: 0 }} >
          {values}
        </Typography.Text>
      </Space>
    </Card>
  );
}
