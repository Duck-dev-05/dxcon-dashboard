import React from "react";
import './css/DashboardTable.css';

const DashboardTable = () => {
    //Sample data for the table
    const rows = [
        {
            logo: './image/image 5.png',
            'Số lượng đã mua': '100,000',
            'Số lượng đã tiêu thụ': '37,687',
            'Số phản hồi còn lại': '62,313',
            'Số tháng còn lại của bản quyền': '10,2 tháng',
            'Trung bình tiêu thụ theo tháng': '204.59',
        },  
        {
            logo: './image/image 5.png',
            'Số lượng đã mua': '100,000',
            'Số lượng đã tiêu thụ': '37,687',
            'Số phản hồi còn lại': '62,313',
            'Số tháng còn lại của bản quyền': '10,2 tháng',
            'Trung bình tiêu thụ theo tháng': '204.59',
        },
        {
            logo: './image/image 5.png',
            'Số lượng đã mua': '100,000',
            'Số lượng đã tiêu thụ': '37,687',
            'Số phản hồi còn lại': '62,313',
            'Số tháng còn lại của bản quyền': '10,2 tháng',
            'Trung bình tiêu thụ theo tháng': '204.59',
        },
        {
            logo: './image/image 5.png',
            'Số lượng đã mua': '100,000',
            'Số lượng đã tiêu thụ': '37,687',
            'Số lượng phản hồi còn lại': '62,313',
            'Số tháng còn lại của bản quyền': '10,2 tháng',
            'Trung bình tiêu thụ theo tháng': '204.59',
        },
        {
            logo: './image/image 5.png',
            'Số lượng đã mua': '100,000',
            'Số lượng đã tiêu thụ': '37,687',
            'Số lượng phản hồi còn lại': '62,313',
            'Số tháng còn lại của bản quyền': '10,2 tháng',
            'Trung bình tiêu thụ theo tháng': '204.59',
        },
    ];

    return (
        <div className="dashboard-table">
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Số lượng đã mua</th>
                        <th>Số lượng đã tiêu thụ</th>
                        <th>Số phản hồi còn lại</th>
                        <th>Số tháng còn lại của bản quyền</th>
                        <th>Trung bình tiêu thụ theo tháng</th>
                    </tr>
                </thead>
                <tbody>
                   {rows.map((row, index)=>(
                    <tr key={index}>
                        <td>
                            <img src="./image/image 7.png" alt="Logo" className="table-logo"/>
                        </td>
                        <td>{row["Số lượng đã mua"]}</td>
                        <td>{row["Số lượng đã tiêu thụ"]}</td>
                        <td>{row["Số phản hồi còn lại"]}</td>
                        <td>{row["Số tháng còn lại của bản quyền"]}</td>
                        <td>{row["Trung bình tiêu thụ theo tháng"]}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Showing data 1 to 6 of 256K entries</span>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>...</button>
                    <button>40</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardTable;