import DashboardLayout from "~/layout/Dashboard/DashboardLayout";

Home.getLayout = (page: never) => <DashboardLayout>{page}</DashboardLayout>;

export default function Home() {
  return <></>;
}
