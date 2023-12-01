import './ReportData.css';
import { payload } from '../../../mockData/mocks';
import moment from 'moment';

const ReportData = () => {
  return (
    <div className="flex flex-col text-sm  py-4 px-6">
      <table className="mb-1.5" cellSpacing={0}>
        <tbody>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>
                {`${payload?.data?.loanDetails?.bankName}_PD_REPORT_${payload?.data?.personalDetails?.applicants[0]?.name}_${payload?.data?.pdDetails?.location}_${payload?.data?.loanDetails?.alc}_${payload?.data?.pdDetails?.pdVisitDate}`}
              </p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>
                {`${payload?.data?.loanDetails?.loan}: ${payload?.data?.loanDetails?.loanType}`}
              </p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>PERSONAL DATA</p>
            </td>
          </tr>
          <tr>
            <td colSpan={8}>
              <div className="flex w-full">
                <div className="w-1/4">
                  <div className="b-r">
                    <p className="bg pl-1 b-b text-center h-6"></p>
                    <p className="pl-1 b-b">Name</p>
                    <p className="pl-1 b-b">Date of Birth</p>
                    <p className="pl-1 b-b">Qualifications</p>
                    <p className="pl-1 b-b">Current Experience</p>
                    <p className="pl-1 b-b">Overall Experience</p>
                    <p className="pl-1">Nature of Business</p>
                  </div>
                </div>
                <div
                  className={`w-3/4 grid grid-cols-${payload.data.personalDetails.applicants.length}`}
                >
                  {payload.data.personalDetails.applicants.map(
                    (item: any, index: number) => (
                      <div
                        className={
                          index <
                          payload.data.personalDetails.applicants.length - 1
                            ? 'b-r'
                            : ''
                        }
                      >
                        <p className="bg pl-1 b-b text-center font-bold h-6">
                          {index === 0 ? 'Applicant' : 'Co-Applicant ' + index}
                        </p>
                        <p className="pl-1 b-b">{item.name}</p>
                        <p className="pl-1 b-b">{item.dobDoi}</p>
                        <p className="pl-1 b-b">{item.qualification}</p>
                        <p className="pl-1 b-b">{item.currExp} Years</p>
                        <p className="pl-1 b-b">{item.overallExp} Years</p>
                        <p className="pl-1">{item.natureOfBusiness}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={8}>
              <div className="flex w-full">
                <div className="w-1/4">
                  <div className="b-r">
                    <p className="pl-1 b-b">Residence Address</p>
                    <p className="pl-1 b-b">Residence Status</p>
                    <p className="pl-1 b-b">Residing Since</p>
                    <p className="pl-1 b-b h-10">Residential Area</p>
                    <p className="pl-1 h-10">Residential Value (Rs.)</p>
                  </div>
                </div>
                <div
                  className={`w-3/4 grid grid-cols-${payload.data.personalDetails.residents.length}`}
                >
                  {payload.data.personalDetails.residents.map(
                    (item: any, index: number) => (
                      <div
                        className={
                          index <
                          payload.data.personalDetails.applicants.length - 1
                            ? 'b-r'
                            : ''
                        }
                      >
                        <p className="pl-1 b-b">{item.resiAddress}</p>
                        <p className="pl-1 b-b">{item.resiStatus}</p>
                        <p className="pl-1 b-b">{item.resiSince}</p>
                        <p className="pl-1 b-b h-10">
                          Buildup Area: {item.buildArea} Sq. Ft. <br />
                          Carpet Area: {item.carpetArea} Sq. Ft.
                        </p>
                        <p className="pl-1 h-10">
                          Purchase Value: {item.purchaseValue} Lakhs <br />
                          Market Value: {item.marketValue} Lakhs
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p className="pl-1">Family Background</p>
            </td>
            <td className="bg font-bold text-center" colSpan={2}>
              <p>Name</p>
            </td>
            <td className="bg font-bold text-center" colSpan={2}>
              <p>Relation</p>
            </td>
            <td className="bg font-bold text-center" colSpan={2}>
              <p>Earning/Dependent</p>
            </td>
          </tr>
          {payload.data.personalDetails.familyDetails.map((item: any) => (
            <tr>
              <td colSpan={2} className="text-center">
                <p className="pl-1">{item.name}</p>
              </td>
              <td colSpan={2} className="text-center">
                <p className="pl-1">{item.relation}</p>
              </td>
              <td colSpan={2} className="text-center">
                <p className="pl-1">{item.earningStatus}</p>
              </td>
            </tr>
          ))}
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="mt-2">BUSINESS DATA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>ASBS &amp; Co. Observations</p>
            </td>
            <td colSpan={7}>
              <div className="flex justify-between m-2 font-bold">
                <p>Income Sources:</p>
                <p>(Amt in Rs.)</p>
              </div>
              <div className="flex justify-between m-4">
                <div className="flex w-full border-[1.5px] border-r-0 border-black">
                  <div className="w-1/4">
                    <div className="b-r text-center">
                      <p className="bg pl-1 b-b h-6 font-bold">Particulars</p>
                      <p className="pl-1 b-b">Turnover</p>
                      <p className="pl-1 b-b">Entity</p>
                      <p className="pl-1 b-b">Gross Profit</p>
                      <p className="pl-1 b-b">Net Margin</p>
                      <p className="pl-1 b-b">Share of Profit</p>
                      <p className="pl-1 b-b">Partner's Salary</p>
                      <p className="pl-1 b-b">Partner's Remuneration</p>
                      <p className="pl-1 b-b font-bold">Other Income</p>
                      <p className="pl-1 b-b font-bold">Total</p>
                      <p className="pl-1 font-bold">Grand Total</p>
                    </div>
                  </div>
                  <div
                    className={`w-3/4 grid grid-cols-${payload.data.financials.length} text-center`}
                  >
                    {payload.data.financials.map((item: any) => (
                      <div className="b-r">
                        <p className="bg pl-1 b-b font-bold h-6">
                          {item.applicantIncome}
                        </p>
                        <p className="pl-1 b-b">
                          {item.income.turnoverGrossReciepts.amountPA}
                        </p>
                        <p className="pl-1 b-b">{item.entityName}</p>
                        <p className="pl-1 b-b">
                          {item.income.totalAmountPA} (
                          {item.income.totalAmountPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.netProfitPA} (
                          {item.expenses.netProfitPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.shareOfProfitPA} (
                          {item.expenses.shareOfProfitPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.shareOfProfitPA} (
                          {item.expenses.shareOfProfitPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.shareOfProfitPA} (
                          {item.expenses.shareOfProfitPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.shareOfProfitPA} (
                          {item.expenses.shareOfProfitPM})
                        </p>
                        <p className="pl-1 b-b">
                          {item.expenses.shareOfProfitPA} (
                          {item.expenses.shareOfProfitPM})
                        </p>
                        <p className="pl-1">{item.expenses.shareOfProfitPA}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - {payload?.data?.businessDetails?.howTurnoverVerified}
                  </li>
                  <li>
                    - It’s advised to cross check income with ITR &amp;
                    Financial statements for last 3 years as during visit it we
                    were not provided.
                  </li>
                </ul>
                <p className="my-4 font-bold">Assets Backing:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - Asset & Investment Backing: 1.16 Cr.
                    <br />
                    (For the detail of assets please refer “Assets Head +
                    Investment” below)
                  </li>
                </ul>
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>- Reason fow low asset backing was not provided.</li>
                </ul>
                <p className="my-4 font-bold">Existing Commitments:</p>
                <ul className="ml-6 mb-6">
                  <li>- EMI Commitments: Nil</li>
                  <li>- Other Commitments: Nil</li>
                </ul>
              </div>
              <table cellSpacing={0} className="w-10/12 mt-4 mx-auto">
                <tbody>
                  <tr className="bg font-bold text-center">
                    <td>
                      <p>Particular</p>
                    </td>
                    <td colSpan={2}>
                      <p>Ratio</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Loan to Property value</p>
                    </td>
                    <td colSpan={2}>
                      <p>As per Agreement Value:</p>
                      <p className="ml-6">79.31% (1.15 Cr./1.45 Cr.)</p>
                      <p>As per Purchase Value:</p>
                      <p className="ml-6">69.70% (1.15 Cr./1.65 Cr.)</p>
                      <p>As per Market Value:</p>
                      <p className="ml-6">69.70% (1.15 Cr./1.65 Cr.)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>EMI Commitments to Total Earning(FOIR)</p>
                    </td>
                    <td colSpan={2}>
                      <p className="ml-6">6.80% (11.54 Lakhs/1.7 Cr.)</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - Proposed EMI at 8% for 20 years on 1.15 Cr. comes to
                    96,191 p.m.
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Business Profile</p>
            </td>
            <td colSpan={7}>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>History of Applicant:</span>
              </div>
              <div className="mx-4">
                <ul className="ml-6 mb-6">
                  <li>- Applicant has completed Post Graduate in year 2012.</li>
                  <li>
                    - Previously applicant has worked for 7 years as a
                    housewife.
                  </li>
                  <li>- Applicant started business in year 2019.</li>
                </ul>
              </div>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>History of Co-Applicant:</span>
              </div>
              <div className="mx-4">
                <ul className="ml-6 mb-6">
                  <li>- Applicant has completed Residing Since: in year .</li>
                  <li>
                    - He started his jurney with Kotak Bank and worked as a
                    credit Manager for 3.5 years
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>Business Process</span>
              </div>
              <div className="mx-4">
                <ul className="ml-6 mb-6">
                  <li>
                    - Applicant started a Proprietorship Firm named XYZ Colony
                    in year 2019.
                  </li>
                  <li>- They provide services of banking.</li>
                  <li>- Loans and advances are being advanced by them.</li>
                  <li>
                    - Service Charges ranges between 2% to 3% per transaction.
                  </li>
                  <li>
                    - Monthly gross receipts from them are between 11.34 Lakhs
                    to 17 Lakhs.
                  </li>
                  <li>- 90% of transaction are done via banking channels.</li>
                  <li>
                    - Expenses in the business are Salary: 2 Lakhs, Electricity:
                    18,000, Travelling Expenses:
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>Comment on Top line of Financial Statement:</span>
              </div>
              <table cellSpacing={0} className="w-10/12 my-4 mx-auto">
                <tbody>
                  <tr className="bg font-bold text-center">
                    <td>
                      <p>Year</p>
                    </td>
                    <td>
                      <p>Turnover (Rs.)</p>
                    </td>
                    <td>
                      <p>Reason for Drop/Increase</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2021 (as per F.S.)</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                    <td rowSpan={2}>
                      <p>Cannot Comment as Data was not</p>
                      <p>provided.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2022 (as per F.S.)</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>
                  Comment on Turnover as per Financial Statement and Turnover
                  till date:
                </span>
              </div>
              <table cellSpacing={0} className="w-10/12 my-4 mx-auto">
                <tbody>
                  <tr className="bg font-bold text-center">
                    <td>
                      <p>Year</p>
                    </td>
                    <td>
                      <p>Turnover (Rs.)</p>
                    </td>
                    <td>
                      <p>Profit (Rs.)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2023 (as per F.S.)</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2023 (Actuals)</p>
                    </td>
                    <td>
                      <p>1.7 Cr.</p>
                    </td>
                    <td>
                      <p>1.65 Cr.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>April-2023 till Date (Actuals)</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                    <td>
                      <p>NP</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>Comment on Trend of Business of past 2 years:</span>
              </div>
              <div className="mx-4">
                <ul className="ml-6 mb-6">
                  <li>- Cannot Comment as data was not provided.</li>
                </ul>
              </div>
              <div className="flex gap-2 my-2 mx-4 font-bold">
                <img
                  width={15}
                  height={15}
                  src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
                />
                <span>Future Projection:</span>
              </div>
              <div className="mx-4">
                <ul className="ml-6 mb-6">
                  <li>- Applicant will continue business as it is.</li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name of Entity</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.bussinessName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Type of Entity</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.typeOfEntity}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Age of Entity (Years)</p>
            </td>
            <td colSpan={7}>
              <p>
                {moment().year() -
                  payload?.data?.businessDetails?.yearOfIncorporation}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>PD Conducted with</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.pdConductWith}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Designation</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.designation}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Office Address</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.regOfficeAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visited Address</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.visitedAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Vicinity</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.vicinity}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ownership</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.ownership}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Phone Number</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.mobile}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visit Date and Time</p>
            </td>
            <td colSpan={7}>
              <p>
                {payload?.data?.pdDetails?.pdVisitDate} :{' '}
                {payload?.data?.pdDetails?.pdConductTime}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>No. of Visits</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.noOfVisit}</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p>Loan Amount (Rs.)</p>
            </td>
            <td colSpan={3}>
              <p>Loan Applied (As per Application Form)</p>
            </td>
            <td colSpan={4}>
              <p>
                {
                  payload?.data?.detailsOfProp?.propertyLoanDetails
                    ?.loanAsPerForm
                }
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Loan Applied (As per P.D.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {
                  payload?.data?.detailsOfProp?.propertyLoanDetails?.loanDetails
                    .amount
                }
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Purpose of LAP/Topup</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.pdConductWith}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Family Members in Business</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.familyBusiness}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Generation</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.generation}</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p>Shareholding Pattern of Ownership</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Entity Name</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Name</p>
            </td>
            <td colSpan={3} className="bg">
              <p>Share Holding (%)</p>
            </td>
          </tr>
          {payload.data.businessDetails.shareHoldings.map((item: any) => (
            <tr>
              <td colSpan={2}>
                <p>{payload?.data?.businessDetails?.bussinessName}</p>
              </td>
              <td colSpan={2}>
                <p>{item?.ownerName}</p>
              </td>
              <td colSpan={3}>
                <p>{item?.shareHolding}</p>
              </td>
            </tr>
          ))}

          <tr>
            <td width={160}>
              <p>Main use of products/services</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.mainUseproducts}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Documents seen Sales/Purchase/LL Documents /Any other</p>
            </td>
            <td colSpan={7}>
              <ul id="l2">
                {payload?.data?.documentsSeen.map((item: any) => {
                  return (
                    item?.isDoc === 'Yes' && (
                      <li data-list-text="-">- {item?.label}</li>
                    )
                  );
                })}
                <li>
                  - No documents provided &amp; applicant said Documents are
                  already given to bank.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Cities of Representation of Business</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.citiesOfReppresentation}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Period Provided to Customers</p>
            </td>
            <td colSpan={7}>
              <p>No Credit Provided to Clients</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Period given by Suppliers</p>
            </td>
            <td colSpan={7}>
              <p>NA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Key Competitors to Business</p>
            </td>
            <td colSpan={7}>
              <p>{payload?.data?.businessDetails?.competitorsOfBusiness}</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p>Employees Details</p>
            </td>
            <td colSpan={2} className="bg">
              <p>No. of Employees seen</p>
            </td>
            <td colSpan={3} className="bg">
              <p>No. Of Employees specified by applicant</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Total Salary (Rs. p.a.)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>{payload?.data?.businessDetails?.empSpecified}</p>
            </td>
            <td colSpan={3}>
              <p>{payload?.data?.businessDetails?.empSeen}</p>
            </td>
            <td colSpan={2}>
              <p>2 Lakhs</p>
            </td>
          </tr>
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="mt-2">FINANCIAL DATA</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-m-[1px]">
                <p className="bg b-b h-6"></p>
                <p className="b-b h-10">Turnover (Rs.)</p>
                <p className="b-b h-10">Purchases (Rs.)</p>
                <p className="b-b h-10">Net Margin</p>
                <p className="b-b h-5">Other Income (Rs.)</p>
                <p className="h-auto">Total Expenses (Rs.)</p>
              </div>
            </td>
            <td>
              <div className="-m-[1px]">
                <p className="bg pl-1 b-b text-center h-6"></p>
                <p className="pl-1 b-b h-5">Monthly</p>
                <p className="pl-1 b-b h-5">Annual</p>
                <p className="pl-1 b-b h-5">Monthly</p>
                <p className="pl-1 b-b h-5">Annual</p>
                <p className="pl-1 b-b h-10">
                  Value: <br />
                  Percentage:
                </p>
                <p className="pl-1 b-b h-5">Annual</p>
                <p className="pl-1 h-5">Annual</p>
              </div>
            </td>
            <td colSpan={6}>
              <div className="flex w-full">
                <div className="w-2/10"></div>
                <div
                  className={`w-5/10 grid grid-cols-${payload.data.financials.length}`}
                >
                  {payload.data.financials.map((item: any, index: number) => (
                    <div className="b-r">
                      <p className="bg pl-1 b-b text-center font-bold h-6">
                        {index === 0 ? 'Applicant' : 'Co-Applicant ' + index}
                      </p>
                      <p className="pl-1 b-b h-5">
                        {item.income.turnoverGrossReciepts.amountPM} Lakhs
                      </p>
                      <p className="pl-1 b-b h-5">
                        {item.income.turnoverGrossReciepts.amountPA / 100} Cr.
                      </p>
                      <p className="pl-1 b-b h-5">
                        {item.income.purchases.amountPM} Lakhs
                      </p>
                      <p className="pl-1 b-b h-5">
                        {item.income.purchases.amountPA / 100} Cr.
                      </p>
                      <p className="pl-1 b-b h-10">
                        {item.income.purchases.amountPM} Lakhs
                      </p>
                      <p className="pl-1 b-b h-5">
                        {item.income.purchases.amountPA / 100} Cr.
                      </p>
                      <p className="pl-1">
                        Salary: {item.income.purchases.amountPM} Lakhs <br />
                        Electricity: {item.income.purchases.amountPM} <br />
                        Travelling Expenses: {
                          item.income.purchases.amountPM
                        }{' '}
                        Lakhs
                        <br />
                        TotalExpenses: {item.income.purchases.amountPM} Lakhs
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={1}>
              <p>Assets in Value (Rs.)</p>
            </td>
            <td colSpan={7}>
              <div className="my-2 mx-3">
                <p className="font-bold">Business Assets:</p>
                {payload.data.assets.bussinessAssetDetails.bussinessAssets
                  .length > 0 ? (
                  <table cellSpacing={0} className="w-full mt-4 mx-auto">
                    <tbody>
                      <tr className="bg">
                        <td>
                          <p>Particulars</p>
                        </td>
                        <td>
                          <p>Location / Company Name</p>
                        </td>
                        <td>
                          <p>Year of Purchase</p>
                        </td>
                        <td>
                          <p>Area (in sq. Feet)</p>
                        </td>
                        <td>
                          <p>Status of property (Self acquired/ Parental)</p>
                        </td>
                        <td>
                          <p>Market Value (Rs.)</p>
                        </td>
                      </tr>
                      {payload.data.assets.bussinessAssetDetails.bussinessAssets.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>{item.particulars}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.location}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.purchaseYear}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.carpetArea}</p>
                            </td>
                            <td>
                              <p>{item.status}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.marketValue} Lakhs</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={5}>
                          <p>Total</p>
                        </td>
                        <td>
                          <p>
                            {`${payload.data.assets.bussinessAssetDetails.totalMarketValue} Lakhs`}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No Business Assets</p>
                )}
                <p className="font-bold my-4">Personal Assets:</p>
                {payload.data.assets.personalAssetDetails.personalAssets
                  .length > 0 ? (
                  <table cellSpacing={0} className="w-full mt-4 mx-auto">
                    <tbody>
                      <tr className="bg">
                        <td>
                          <p>Particulars</p>
                        </td>
                        <td>
                          <p>Location / Company Name</p>
                        </td>
                        <td>
                          <p>Year of Purchase</p>
                        </td>
                        <td>
                          <p>Area (in sq. Feet)</p>
                        </td>
                        <td>
                          <p>Status of property (Self acquired/ Parental)</p>
                        </td>
                        <td>
                          <p>Market Value (Rs.)</p>
                        </td>
                      </tr>
                      {payload.data.assets.personalAssetDetails.personalAssets.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>{item.particulars}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.location}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.purchaseYear}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.carpetArea}</p>
                            </td>
                            <td>
                              <p>{item.status}</p>
                            </td>
                            <td>
                              <p>
                                <br />
                              </p>
                              <p>{item.marketValue} Lakhs</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={5}>
                          <p>Total</p>
                        </td>
                        <td>
                          <p>
                            {`${payload.data.assets.bussinessAssetDetails.totalMarketValue} Lakhs`}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No Business Assets</p>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Debtors as on date</p>
            </td>
            <td colSpan={7}>
              <p>No outstanding from debtors.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Major Clientele</p>
            </td>
            <td colSpan={7}>
              <p>Client's details not provided.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Creditors as on date</p>
            </td>
            <td colSpan={7}>
              <p>NA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Major Supplier</p>
            </td>
            <td colSpan={7}>
              <p>No Suppliers in the business.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Stock Level as on date</p>
            </td>
            <td colSpan={7}>
              <p>Stock are not applicable.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Bank Account Details</p>
            </td>
            <td colSpan={7}>
              {payload.data.assets.bankAccountDetails.bankAccounts.length >
              0 ? (
                <table cellSpacing={0} className="w-full">
                  <tbody>
                    <tr className="bg">
                      <td>
                        <p>Bank Name</p>
                      </td>
                      <td>
                        <p>Branch</p>
                      </td>
                      <td>
                        <p>Type</p>
                      </td>
                      <td>
                        <p>Balance as on date (Rs.)</p>
                      </td>
                    </tr>
                    {payload.data.assets.bankAccountDetails.bankAccounts.map(
                      (item: any, index: number) => (
                        <tr key={index}>
                          <td>
                            <p>{item.bankName}</p>
                          </td>
                          <td>
                            <p>{item.branch}</p>
                          </td>
                          <td>
                            <p>{item.type}</p>
                          </td>
                          <td>
                            <p>{item.balanceOnDay}</p>
                          </td>
                        </tr>
                      ),
                    )}
                    <tr>
                      <td colSpan={3}>
                        <p>Total</p>
                      </td>
                      <td>
                        <p>
                          {`${payload.data.assets.bankAccountDetails.totalBalance} Lakhs`}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p>No Bank Accounts</p>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <p>Investments</p>
            </td>
            <td colSpan={7}>
              {payload.data.assets.investmentDetails.investments.length > 0 ? (
                <table cellSpacing={0} className="w-full">
                  <tbody>
                    <tr className="bg">
                      <td>
                        <p>Particulars</p>
                      </td>
                      <td>
                        <p>Contribution (Rs.)</p>
                      </td>
                      <td>
                        <p>Market Value (Rs.)</p>
                      </td>
                    </tr>
                    {payload.data.assets.investmentDetails.investments.map(
                      (item: any, index: number) => (
                        <tr key={index}>
                          <td>
                            <p>{item.particulars}</p>
                          </td>
                          <td>
                            <p>{item.contribution}</p>
                          </td>
                          <td>
                            <p>{item.marketValue}</p>
                          </td>
                        </tr>
                      ),
                    )}
                    <tr>
                      <td colSpan={2}>
                        <p>Total</p>
                      </td>
                      <td>
                        <p>
                          {`${payload.data.assets.investmentDetails.totalMarketValue} Lakhs`}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p>No Investments</p>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <p>Loan Details</p>
            </td>
            <td colSpan={7}>
              {payload.data.existingLoan.existanceLoan.balanceTransfer.length >
                0 ||
              payload.data.existingLoan.existanceLoan.existingLoanClosed
                .length > 0 ||
              payload.data.existingLoan.existanceLoan.existingLoanEMI.length >
                0 ? (
                <table cellSpacing={0} className="w-full">
                  <tbody>
                    <tr className="bg">
                      <td>
                        <p>Type of Facility</p>
                      </td>
                      <td>
                        <p>Bank Name</p>
                      </td>
                      <td>
                        <p>Limit (Rs.)</p>
                      </td>
                      <td>
                        <p>Average Utilization (Rs.)</p>
                      </td>
                      <td>
                        <p>Interest Rate (%)</p>
                      </td>
                      <td>
                        <p>Remarks</p>
                      </td>
                    </tr>
                    {payload.data.existingLoan.existanceLoan.balanceTransfer.map(
                      (item: any, index: number) => (
                        <tr key={index}>
                          <td>
                            <p>{item.typeOfFacility}</p>
                          </td>
                          <td>
                            <p>{item.bankName}</p>
                          </td>
                          <td>
                            <p>{item.limit}</p>
                          </td>
                          <td>
                            <p>{item.averageUtilization}</p>
                          </td>
                          <td>
                            <p>{item.interestRate}</p>
                          </td>
                          <td>
                            <p>{item.remark}</p>
                          </td>
                        </tr>
                      ),
                    )}
                    {payload.data.existingLoan.existanceLoan.existingLoanClosed.map(
                      (item: any, index: number) => (
                        <tr key={index}>
                          <td>
                            <p>{item.typeOfFacility}</p>
                          </td>
                          <td>
                            <p>{item.bankName}</p>
                          </td>
                          <td>
                            <p>{item.limit}</p>
                          </td>
                          <td>
                            <p>{item.averageUtilization}</p>
                          </td>
                          <td>
                            <p>{item.interestRate}</p>
                          </td>
                          <td>
                            <p>{item.remark}</p>
                          </td>
                        </tr>
                      ),
                    )}
                    {payload.data.existingLoan.existanceLoan.existingLoanEMI.map(
                      (item: any, index: number) => (
                        <tr key={index}>
                          <td>
                            <p>{item.typeOfFacility}</p>
                          </td>
                          <td>
                            <p>{item.bankName}</p>
                          </td>
                          <td>
                            <p>{item.limit}</p>
                          </td>
                          <td>
                            <p>{item.averageUtilization}</p>
                          </td>
                          <td>
                            <p>{item.interestRate}</p>
                          </td>
                          <td>
                            <p>{item.remark}</p>
                          </td>
                        </tr>
                      ),
                    )}
                    <tr>
                      <td colSpan={2}>
                        <p>Total</p>
                      </td>
                      <td colSpan={2}>
                        <p>{`${
                          payload.data.existingLoan.existanceLoan.totalLoanBt +
                          payload.data.existingLoan.existanceLoan.totalLoanEc +
                          payload.data.existingLoan.existanceLoan.totalLoanEm
                        }`}</p>
                      </td>
                      <td>
                        <p>{`${
                          payload.data.existingLoan.existanceLoan.totalLoanBtEmi +
                          payload.data.existingLoan.existanceLoan.totalLoanEcEmi +
                          payload.data.existingLoan.existanceLoan.totalLoanEmEmi
                        }`}</p>
                      </td>
                      <td>
                        <p>{`${
                          payload.data.existingLoan.existanceLoan.totalLoanBtOut +
                          payload.data.existingLoan.existanceLoan.totalLoanEcOut +
                          payload.data.existingLoan.existanceLoan.totalLoanEmOut
                        }`}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p>No Loans</p>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Facility</p>
            </td>
            <td colSpan={7}>
              <td colSpan={7}>
                {payload.data.existingLoan.creditFacility.creditDetails.length >
                0 ? (
                  <table cellSpacing={0} className="w-full">
                    <tbody>
                      <tr className="bg">
                        <td>
                          <p>Type of Facility</p>
                        </td>
                        <td>
                          <p>Bank Name</p>
                        </td>
                        <td>
                          <p>Limit (Rs.)</p>
                        </td>
                        <td>
                          <p>Average Utilization (Rs.)</p>
                        </td>
                        <td>
                          <p>Interest Rate (%)</p>
                        </td>
                        <td>
                          <p>Remarks</p>
                        </td>
                      </tr>
                      {payload.data.existingLoan.creditFacility.creditDetails.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>{item.typeOfFacility}</p>
                            </td>
                            <td>
                              <p>{item.bankName}</p>
                            </td>
                            <td>
                              <p>{item.limit}</p>
                            </td>
                            <td>
                              <p>{item.averageUtilization}</p>
                            </td>
                            <td>
                              <p>{item.interestRate}</p>
                            </td>
                            <td>
                              <p>{item.remark}</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={2}>
                          <p>Total</p>
                        </td>
                        <td colSpan={2}>
                          <p>
                            {`${payload.data.existingLoan.creditFacility.totalLoanCfLimit}`}
                          </p>
                        </td>
                        <td>
                          <p>
                            {`${payload.data.existingLoan.creditFacility.totalLoanCfAu}`}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No Credit Facility</p>
                )}
              </td>
            </td>
          </tr>
          <tr>
            <td>
              <p>Other Commitments</p>
            </td>
            <td colSpan={7}>
              <td colSpan={7}>
                {payload.data.existingLoan.otherCommitments.commitmentsDetails
                  .length > 0 ? (
                  <table cellSpacing={0} className="w-full">
                    <tbody>
                      <tr className="bg">
                        <td>
                          <p>Particulars</p>
                        </td>
                        <td>
                          <p>Contribution P.A. (Rs.)</p>
                        </td>
                        <td>
                          <p>Sum Assured/Maturity Value (Rs.)</p>
                        </td>
                      </tr>
                      {payload.data.existingLoan.otherCommitments.commitmentsDetails.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>{item.particulars}</p>
                            </td>
                            <td>
                              <p>{item.contribution}</p>
                            </td>
                            <td>
                              <p>{item.sumAssured}</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={2}>
                          <p>Total</p>
                        </td>
                        <td colSpan={2}>
                          <p>
                            {`${payload.data.existingLoan.otherCommitments.totalCon}`}
                          </p>
                        </td>
                        <td>
                          <p>
                            {`${payload.data.existingLoan.otherCommitments.totalSum}`}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No other commitments</p>
                )}
              </td>
            </td>
          </tr>
          <tr>
            <td>
              <p>GSTIN</p>
            </td>
            <td colSpan={7}>
              <p>{payload.data.businessDetails.gstNumber}</p>
            </td>
          </tr>
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="mt-2">Details of Property to be mortgage</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name of the Builder (If Under Construction Property)</p>
            </td>
            <td colSpan={7}>
              <p>{payload.data.detailsOfProp.builderName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Address of the Property</p>
            </td>
            <td colSpan={7}>
              <p>{payload.data.detailsOfProp.loanPropertyAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Date of Purchase</p>
            </td>
            <td colSpan={7}>
              <p>{payload.data.detailsOfProp.purchaseYear}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Area</p>
            </td>
            <td colSpan={7}>
              <p>
                Built-up Area: {payload.data.detailsOfProp.buildUpArea} Sq. Ft.
              </p>
              <p>Carpet Area: {payload.data.detailsOfProp.caretArea} Sq. Ft.</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={7}>
              <p>Value &amp; OCR</p>
            </td>
            <td colSpan={3}>
              <p>Agreement Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                  .agreementValue / 100}{' '}
                Cr.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Purchase Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                  .purchaseValue / 100}{' '}
                Cr.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Market Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                  .marketValue / 100}{' '}
                Cr.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>OCR Already Paid (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                  .ocrPaid / 100}{' '}
                Cr.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Loan Expected (Rs) (HL)</p>
            </td>
            <td colSpan={4}>
              <p>1.15 Cr.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Balance OCR</p>
            </td>
            <td colSpan={4}>
              <p>
                {
                  payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                    .balanceOcr
                }{' '}
                Lakhs
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Source of Balance OCR</p>
            </td>
            <td colSpan={4}>
              <p>
                {
                  payload.data.detailsOfProp.propertyLoanDetails.propertyValue
                    .sourceOcr
                }
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Occupied By</p>
            </td>
            <td colSpan={7}>
              <p>{payload.data.detailsOfProp.occupiedBy}</p>
            </td>
          </tr>
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="mt-2">
                Observation noted at the time of visit and final recommendation
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>CIBIL Rating and Comments</p>
            </td>
            <td colSpan={7}>
              <p>Kindly Refer CIBIL Rating.</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={9}>
              <p>Other Observation (Yes/No)</p>
            </td>
            <td colSpan={7}>
              <p>
                1.Business Plate name seen:
                {payload.data.observations.businessPlateName.exist}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                2.Activtity Seen: {payload.data.observations.activity.exist} (
                {payload.data.observations.activity.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                3.Employees Seen:{' '}
                {payload.data.businessDetails?.empSeen === 0
                  ? 'No'
                  : `Yes (${payload.data.businessDetails.empSeen})`}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                4.Customer Seen: {payload.data.observations.customer.exist} (
                {payload.data.observations.customer.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                5.Stock seen: {payload.data.observations.stock.exist} (
                {payload.data.observations.stock.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                6. During Visit:- <br />
                <span>
                  - {payload.data.observations.duringVist.applicantDoing}
                </span>
                <br />
                <span>
                  - {payload.data.observations.duringVist.employeesDoing}
                </span>
                <br />
                <span>
                  - {payload.data.observations.duringVist.otherObservation}
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                7.Third Party Check:
                {payload.data.observations.thirdPartyCheck.exist} (
                {payload.data.observations.thirdPartyCheck.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                8. Screenshot of CCTV of premises other than Visited:{' '}
                {payload.data.observations.screenshotOfCCTV.exist} (
                {payload.data.observations.screenshotOfCCTV.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                9. Behaviour of applicant:{' '}
                {payload.data.observations.behaviourOfApplicant}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="my-4">
        <h1>Disclaimer Clause: -</h1>
        <p className="text-main">
          The above data and explanation are based on the information provided
          to us during the course of the visit. This report (including any
          attachments) has been prepared on the basis of verbal information
          provided by the person contacted. Bank will be solely responsible for
          any actions taken on this report and any liabilities directly or
          indirectly accruing from such actions. ASBS &amp; Co. will not be held
          liable in any case.
        </p>
      </div>
      <div className="my-4">
        <h1>For ASBS&amp; Co.</h1>
        <h1>Chartered Accountants</h1>
      </div>
      <br />
      {/* <img width={50} height={50} src={activeItem?.assignTo?.profile} />
      <br /> */}
      <div className="my-4">
        <h1>Authorised Signatory</h1>
        <h1>Date: {moment().format('DD-MM-YYYY')}</h1>
      </div>
      <p>
        <br />
      </p>
      <table className="w-1/2 font-bold" cellSpacing={0}>
        <tbody>
          <tr className="bg">
            <td colSpan={2}>
              <p>Prepared by:</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name:</p>
            </td>
            <td>
              <p>{payload?.data?.pdDetails?.reporterName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Contact No:</p>
            </td>
            <td>
              <p>{payload?.data?.pdDetails?.reporterContact}</p>
            </td>
          </tr>
          <tr className="bg">
            <td colSpan={2}>
              <p>Reviewed by:</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name:</p>
            </td>
            <td>
              <p>{payload?.data?.pdDetails?.reviewerName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Contact No:</p>
            </td>
            <td>
              <p>{payload?.data?.pdDetails?.reviewerContact}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportData;
