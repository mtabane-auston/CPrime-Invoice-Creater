import "react";
import {Space, Typography } from "antd"
import { RiseOutlined, FallOutlined, FileTextOutlined, UnorderedListOutlined } from "@ant-design/icons";
import AnalyticsCard from '../components/AnalyticsCard'
// @ts-ignore -- The JavaScript hook currently has no declaration file.
import { useGetAllInvoices } from "../hooks/useGetAllInvoices";
// @ts-ignore -- The JavaScript hook currently has no declaration file.
import { useGetAllItems } from "../hooks/useGetAllItems";
// @ts-ignore -- The JavaScript hook currently has no declaration file.
import { useGetAnalytics } from "../hooks/useGetAnalytics";


const Dashboard = () => {
  const { invoices, loading, error } = useGetAllInvoices();
  const { items, loading: itemsLoading, error: itemsError } = useGetAllItems();
  const { analyticsData, loading: analyticsLoading, error: analyticsError } = useGetAnalytics();

  if (loading || itemsLoading || analyticsLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (itemsError) {
    return <div>Error: {itemsError.message}</div>;
  }
  if (analyticsError) {
    return <div>Error: {analyticsError.message}</div>;
  }
  console.log("analyticsData:", analyticsData);
  return (
    <div className="Dashboard" style={{ paddingInline: '2rem', color: '#ffffff' }}>
      <h2>Dashboard</h2>

      <br />
      <Typography style={{ color: '#ffffff', fontSize: '1.5em', fontWeight: 'lighter', padding: 0, margin: 0 }} >
        Welcome Back, Here is your dashboard overview.
      </Typography>
      <br />
      <Space size="middle" style={{ display: 'flex', flexWrap: 'wrap',  }} >
        <AnalyticsCard values={`R ${analyticsData.totalRevenue}`} title="Total Revenue" icon={<RiseOutlined size={100} />}/>
        <AnalyticsCard values={`R ${analyticsData.highestInvoiceAmount}`} title="ATH" icon={<RiseOutlined size={100} />}/>
        <AnalyticsCard values={`R ${analyticsData.lowestInvoiceAmount}`} title="ATL" icon={<FallOutlined size={100} />}/>
        <AnalyticsCard values={` ${analyticsData.totalInvoices}`} title="Total Invoices" icon={<FileTextOutlined />}/>
        <AnalyticsCard values={analyticsData.totalItems} title="Total Items" icon={<UnorderedListOutlined />}/>

      </Space>
    </div>
  );
};
export default Dashboard;
