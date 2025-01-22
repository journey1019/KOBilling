import MonthlyTable from "@/components/table/MonthlyTable";
import TableComponent from "@/components/table/TableComponent";
import React from "react";

export default function MainPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
    ];

    return(
        <>
            {/*<div className="fixed top-10 left-0 z-50">*/}
            {/*    <div className="flex flex-row w-screen top-[300px] right-0 bg-gray-100 px-4 py-2 text-sm text-gray-600 shadow-md z-50 transition-all duration-300">*/}
            {/*        <span>Home</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <MonthlyTable/>
            {/*<TableComponent/>*/}
        </>
    )
}
