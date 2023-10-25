import './ReportData.css';

const ReportData = () => {
  return (
    <div className="flex flex-col text-sm">
      <table className="mb-1.5" cellSpacing={0}>
        <tbody>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>AXIS PD REPORT_X _Bhayendar_Mira Road ALC_09-09-2023</p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>Home Loan: Fresh</p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p>PERSONAL DATA</p>
            </td>
          </tr>
          <tr className="bg font-bold text-center">
            <td></td>
            <td colSpan={3}>
              <p>Applicant</p>
            </td>
            <td colSpan={2}>
              <p>Co-Applicant 1</p>
            </td>
            <td colSpan={2}>
              <p>Co-Applicant 2</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name</p>
            </td>
            <td colSpan={3}>
              <p>X</p>
            </td>
            <td colSpan={2}>
              <p>Y</p>
            </td>
            <td colSpan={2}>
              <p>Z</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Date of Birth</p>
            </td>
            <td colSpan={3}>
              <p>01-01-1990</p>
            </td>
            <td colSpan={2}>
              <p>01-02-1990</p>
            </td>
            <td colSpan={2}>
              <p>02-02-1990</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Qualifications</p>
            </td>
            <td colSpan={3}>
              <p>Post Graduate</p>
            </td>
            <td colSpan={2}>
              <p>Post Graduate</p>
            </td>
            <td colSpan={2}>
              <p>H.S.C.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Current Experience</p>
            </td>
            <td colSpan={3}>
              <p>4 Years</p>
            </td>
            <td colSpan={2}>
              <p>4 Years</p>
            </td>
            <td colSpan={2}>
              <p>
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Overall Experience</p>
            </td>
            <td colSpan={3}>
              <p>11 Years</p>
            </td>
            <td colSpan={2}>
              <p>16 Years</p>
            </td>
            <td colSpan={2}>
              <p>55 Years</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Nature of Business</p>
            </td>
            <td colSpan={3}>
              <p>Service</p>
            </td>
            <td colSpan={2}>
              <p>Service</p>
            </td>
            <td colSpan={2}>
              <p>Retired</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Residence Address</p>
            </td>
            <td colSpan={7}>
              <p>XYZ Colony 401108</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Residence Status</p>
            </td>
            <td colSpan={7}>
              <p>Owned by Co-Applicant</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Residing Since</p>
            </td>
            <td colSpan={7}>
              <p>2010</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Residential Area</p>
            </td>
            <td colSpan={7}>
              <p>Buildup Area: 880 Sq. Ft.</p>
              <p>Carpet Area: 600 Sq. Ft.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Residential Value (Rs.)</p>
            </td>
            <td colSpan={7}>
              <p>Purchase Value: 30 Lakhs</p>
              <p>Market Value: 22 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>
              <p>Family Background</p>
            </td>
            <td className="bg font-bold text-center" colSpan={2}>
              <p>Name</p>
            </td>
            <td className="bg font-bold text-center" colSpan={3}>
              <p>Relation</p>
            </td>
            <td className="bg font-bold text-center" colSpan={2}>
              <p>Earning/Dependent</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>Y</p>
            </td>
            <td colSpan={3} className="text-center">
              <p>Spouse</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>Earning</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>Z</p>
            </td>
            <td colSpan={3} className="text-center">
              <p>Father-in-Law</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>Earning</p>
            </td>
          </tr>
          <tr className="font-bold text-center h-10">
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
              <table cellSpacing={0} className="w-10/12 mt-4 mx-auto">
                <tbody>
                  <tr className="bg font-bold text-center">
                    <td>
                      <p>Particulars</p>
                    </td>
                    <td>
                      <p>Applicant</p>
                    </td>
                    <td>
                      <p>Co-Applicant 1</p>
                    </td>
                    <td>
                      <p>Co-Applicant 3</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <p>Turnover</p>
                    </td>
                    <td>
                      <p>1.7 Cr.</p>
                    </td>
                    <td>
                      <p>7.7 Lakhs</p>
                    </td>
                    <td>
                      <p>3.96 Lakhs</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <p>Entity</p>
                    </td>
                    <td>
                      <p>x</p>
                    </td>
                    <td>
                      <p>y</p>
                    </td>
                    <td>
                      <p>z</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <p>Gross Profit</p>
                    </td>
                    <td>
                      <p>1.7 Cr. (100%)</p>
                    </td>
                    <td>
                      <p>7.7 Lakhs (100%)</p>
                    </td>
                    <td>
                      <p>3.96 Lakhs (100%)</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <p>
                        <br />
                      </p>
                      <p>Net Margin</p>
                    </td>
                    <td>
                      <p>
                        <br />
                      </p>
                      <p>1.65 Cr. (97.25%)</p>
                    </td>
                    <td>
                      <p>
                        <br />
                      </p>
                      <p>52,000 (6.75%)</p>
                    </td>
                    <td>
                      <p>
                        <br />
                      </p>
                      <p>3.96 Lakhs (100%)</p>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>
                      <p>Share of Profit</p>
                    </td>
                    <td>
                      <p>1.65 Cr. (100%)</p>
                    </td>
                    <td>
                      <p>52,000 (100%)</p>
                    </td>
                    <td>
                      <p>3.96 Lakhs (100%)</p>
                    </td>
                  </tr>
                  <tr className="font-bold text-center">
                    <td>
                      <p>Total</p>
                    </td>
                    <td>
                      <p>1.65 Cr.</p>
                    </td>
                    <td>
                      <p>52,000</p>
                    </td>
                    <td>
                      <p>3.96 Lakhs</p>
                    </td>
                  </tr>
                  <tr className="font-bold text-center">
                    <td>
                      <p>Grand Total</p>
                    </td>
                    <td colSpan={3}>
                      <p>1.7 Cr.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - Turnover is not verified as documents were not provided.
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
              <p>XYZ Colony</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Type of Entity</p>
            </td>
            <td colSpan={7}>
              <p>Proprietorship</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Age of Entity (Years)</p>
            </td>
            <td colSpan={7}>
              <p>4 Years</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>PD Conducted with</p>
            </td>
            <td colSpan={7}>
              <p>Y</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Designation</p>
            </td>
            <td colSpan={7}>
              <p>Proprietor</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Office Address</p>
            </td>
            <td colSpan={7}>
              <p>XYZ Colony</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visited Address</p>
            </td>
            <td colSpan={7}>
              <p>XYZ Colony</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Vicinity</p>
            </td>
            <td colSpan={7}>
              <p>Commercial (Easily Accessible)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ownership</p>
            </td>
            <td colSpan={7}>
              <p>Owned by Co-Applicant</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Phone Number</p>
            </td>
            <td colSpan={7}>
              <p>9819353590</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visit Date and Time</p>
            </td>
            <td colSpan={7}>
              <p>09-09-2023 at 03:00 PM</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>No. of Visits</p>
            </td>
            <td colSpan={7}>
              <p>1</p>
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
              <p>1.15 Cr.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Loan Applied (As per P.D.)</p>
            </td>
            <td colSpan={4}>
              <p>1.15 Cr.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Purpose of LAP/Topup</p>
            </td>
            <td colSpan={7}>
              <p>NA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Family Members in</p>
              <p>Business</p>
            </td>
            <td colSpan={7}>
              <p>None Mentioned</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Generation</p>
            </td>
            <td colSpan={7}>
              <p>First Generation</p>
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
          <tr>
            <td colSpan={2}>
              <p>XYZ Colony</p>
            </td>
            <td colSpan={2}>
              <p>X</p>
            </td>
            <td colSpan={3}>
              <p>100%</p>
            </td>
          </tr>
          <tr>
            <td width={160}>
              <p>Main use of products/services</p>
            </td>
            <td colSpan={7}>
              <p>Providing Financial Service</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Documents seen Sales/Purchase/LL Documents /Any other</p>
            </td>
            <td colSpan={7}>
              <ul id="l2">
                <li>
                  - No documents provided &amp; applicant said Documents are
                  already given to bank.
                </li>
                <li data-list-text="-">
                  - Documents were not handy during PD.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Cities of Representation of Business</p>
            </td>
            <td colSpan={7}>
              <p>Mumbai &amp; Gujurat</p>
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
              <p>None Mentioned</p>
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
              <p>No. Of Employees specified by</p>
              <p>applicant</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Total Salary (Rs. p.a.)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>2</p>
            </td>
            <td colSpan={3}>
              <p>2</p>
            </td>
            <td colSpan={2}>
              <p>2 Lakhs</p>
            </td>
          </tr>
          <tr className="font-bold text-center h-10">
            <td colSpan={8}>
              <p className="mt-2">FINANCIAL DATA</p>
            </td>
          </tr>
          <tr className="bg font-bold">
            <td></td>
            <td></td>
            <td colSpan={2}>
              <p>Applicant</p>
            </td>
            <td colSpan={2}>
              <p>Co-Applicant 1</p>
            </td>
            <td colSpan={2}>
              <p>Co-Applicant 3</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p>Turnover (Rs.)</p>
            </td>
            <td>
              <p>Monthly</p>
            </td>
            <td colSpan={2}>
              <p>14.17 Lakhs</p>
            </td>
            <td colSpan={2}>
              <p>64,000</p>
            </td>
            <td colSpan={2}>
              <p>33,000</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Annual</p>
            </td>
            <td colSpan={2}>
              <p>1.7 Cr.</p>
            </td>
            <td colSpan={2}>
              <p>7.7 Lakhs</p>
            </td>
            <td colSpan={2}>
              <p>3.96 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <p>Purchases (Rs.)</p>
            </td>
            <td>
              <p>Monthly</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Annual</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Total Expenses (Rs.)</p>
            </td>
            <td>
              <p>Annual</p>
            </td>
            <td colSpan={2}>
              <p>Salary: 2 Lakhs</p>
              <p>Electricity: 18,000</p>
              <p>Travelling Expenses: 2.5 Lakhs</p>
              <p>Total Expenses: 4.68 Lakhs</p>
            </td>
            <td colSpan={2}>
              <p>Salary: 4 Lakhs</p>
              <p>Electricity: 18,000</p>
              <p>Travelling Expenses: 3 Lakhs</p>
              <p>Total Expenses: 7.18 Lakhs</p>
            </td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>
              <p>Net Margin</p>
            </td>
            <td>
              <p>Value: Percentage:</p>
            </td>
            <td colSpan={2}>
              <p>1.65 Cr.</p>
              <p>97.25%</p>
            </td>
            <td colSpan={2}>
              <p>52,000</p>
              <p>6.75%</p>
            </td>
            <td colSpan={2}>
              <p>3.96 Lakhs</p>
              <p>100%</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Other Income (Rs.)</p>
            </td>
            <td>
              <p>Annual</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
            <td colSpan={2}>
              <p>Nil</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={1}>
              <p>Assets in Value (Rs.)</p>
            </td>
            <td colSpan={7}>
              <div className="my-2 mx-6">
                <p className="font-bold">Business Assets:</p>
                <p>No Business Assets</p>
                <p className="font-bold my-4">Personal Assets:</p>
                <table cellSpacing={0} className="w-full mt-4 mx-auto">
                  <tbody>
                    <tr className="bg">
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>Particulars</p>
                      </td>
                      <td>
                        <p>Location /</p>
                        <p
                          style={{
                            textIndent: '-7pt',
                          }}
                        >
                          Company Name
                        </p>
                      </td>
                      <td>
                        <p
                          style={{
                            textIndent: '4pt',
                          }}
                        >
                          Year of Purchase
                        </p>
                      </td>
                      <td>
                        <p
                          style={{
                            textIndent: '2pt',
                          }}
                        >
                          Area (in sq. Feet)
                        </p>
                      </td>
                      <td>
                        <p>Status of property</p>
                        <p>(Self acquired/ Parental)</p>
                      </td>
                      <td>
                        <p>Market Value (Rs.)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>Residence</p>
                      </td>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>Bhayendar</p>
                      </td>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>2012</p>
                      </td>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>600</p>
                      </td>
                      <td>
                        <p>Owned by Co-Applicant</p>
                      </td>
                      <td>
                        <p>
                          <br />
                        </p>
                        <p>22 Lakhs</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={5}>
                        <p>Total</p>
                      </td>
                      <td>
                        <p>22 Lakhs</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
            <td rowSpan={4}>
              <p>Bank Account Details</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Bank Name</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Branch</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Type</p>
            </td>
            <td colSpan={3} className="bg">
              <p>Balance as on date</p>
              <p>(Rs.)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>Axis Bank</p>
            </td>
            <td colSpan={2}>
              <p>NP</p>
            </td>
            <td colSpan={2}>
              <p>SA</p>
            </td>
            <td colSpan={3} className="text-center">
              <p>7.6 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>ICICI Bank</p>
            </td>
            <td colSpan={2}>
              <p>NP</p>
            </td>
            <td colSpan={2}>
              <p>SA</p>
            </td>
            <td colSpan={3} className="text-center">
              <p>2 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="font-bold">
              <p>Total</p>
            </td>
            <td className="font-bold text-center">
              <p>9.6 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td rowSpan={5}>
              <p>Investment</p>
            </td>
            <td colSpan={3} className="bg">
              <p>Particulars</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Contribution (Rs.)</p>
            </td>
            <td colSpan={2} className="bg">
              <p>Market Value (Rs.)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Mutual Funds</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>NP</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>28 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Shares &amp; Stocks (Equity)</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>NP</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>33 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Fixed Deposit</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>NP</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>33 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="text-center">
              <p>-</p>
            </td>
            <td colSpan={2} className="font-bold text-center">
              <p>94 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Loan Details</p>
            </td>
            <td colSpan={7}>
              <p>No Loans</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Facility</p>
            </td>
            <td colSpan={7}>
              <p>No Credit Facility</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Other Commitments</p>
            </td>
            <td colSpan={7}>
              <p>No other commitments</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>GSTIN</p>
            </td>
            <td colSpan={7}>
              <p>NA</p>
            </td>
          </tr>
          <tr className="font-bold text-center h-10">
            <td colSpan={8}>
              <p className="mt-2">Details of Property to be mortgage</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name of the Builder (If Under Construction Property)</p>
            </td>
            <td colSpan={7}>
              <p>NA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Address of the Property</p>
            </td>
            <td colSpan={7}>
              <p>Axis APF Project, Near RBK School , Bhayendar East 401105</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Date of Purchase</p>
            </td>
            <td colSpan={7}>
              <p>2023</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Area</p>
            </td>
            <td colSpan={7}>
              <p>Built-up Area: 1300 Sq. Ft.</p>
              <p> Carpet Area: 900 Sq. Ft.</p>
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
              <p>1.45 Cr.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Purchase Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>1.65 Cr.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Market Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>1.65 Cr.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>OCR Already Paid (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>Nil</p>
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
              <p>50 Lakhs</p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Source of Balance OCR</p>
            </td>
            <td colSpan={4}>
              <p>Not Disclosed</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Occupied By</p>
            </td>
            <td colSpan={7}>
              <p>Vacant</p>
            </td>
          </tr>
          <tr className="font-bold text-center h-10">
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
              <p>1.Business Plate name seen: No</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>2.Activtity Seen: No (As visited residence address)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>3.Employees Seen: Yes</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>4.Customer Seen: No</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>5.Stock seen: NA</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>6. During Visit:- Applicant was on call with his client.</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>7.Third Party Check: Positive (Done with Near By Neighbour)</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>8. Screenshot of CCTV of premises other than Visited: No</p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                9. Behaviour of applicant: Co-operative but did not provide
                documents.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="my-4">
        <h1>Disclaimer Clause: -</h1>
        <p className="text-black">
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
      <img
        width={50}
        height={50}
        src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAANAA4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq/wBqv9rnxD8VPGWvfCj4eX2o+DLjRrjF3qVxus5Lxo2G9PM4a2QHaVZuJM4yMqH9h/Y+/bSHxWl1TwT4ktdUvPEvh23Uza1Bp0my9VWEbNJEgJhfccbWxuAJwpDKvTftnfsi+HP2hPBk919tk8M69C8TvqdnAH+1IrYEdwmV80LklcnKHkdwfXvg18FfDfwS8G2uhaFC8rrGi3ep3JDXd86rtEk0gwWOBgdlAAGABQB//9kA"
      />
      <br />
      <div className="my-4">
        <h1>Authorised Signatory</h1>
        <h1>Date: 11-09-2023</h1>
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
              <p>Mr. Arjun Singh</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Contact No:</p>
            </td>
            <td>
              <p>7507388041</p>
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
              <p>Mr. Pankaj Punia</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportData;
