import './ReportData.css';
import moment from 'moment';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';

const ReportData = () => {
  const { reportData } = useSelector((state: any) => state.cases);

  const amtConvertor = (amt: number) => {
    if (amt < 1) return `${(amt * 100000).toFixed(0)}`;
    if (amt > 100) return `${amt / 100} Cr.`;
    else return `${amt} Lakhs`;
  };

  const docsList = reportData?.data?.documentsSeen?.documents.filter(
    (item: any) => item?.isDoc === 'Yes',
  );
  return (
    <div className="flex flex-col text-sm  py-4 px-6 min-w-[650px]">
      <table className="mb-1.5" cellSpacing={0}>
        <tbody>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p className="justify-center">
                {`${reportData?.data?.loanDetails
                  ?.bankName}_PD_REPORT_${reportData?.data?.personalDetails
                  ?.applicants[0]?.name}_${reportData?.data?.pdDetails
                  ?.location}_${
                  reportData?.data?.loanDetails?.alc === 'Other'
                    ? reportData?.data?.loanDetails?.otheralc
                    : reportData?.data?.loanDetails?.alc
                }_${reportData?.data?.pdDetails?.pdVisitDate}`}
              </p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p className="justify-center">
                {`${
                  reportData?.data?.loanDetails?.loan === 'Other'
                    ? reportData?.data?.loanDetails?.otherloan
                    : reportData?.data?.loanDetails?.loan
                }: ${
                  reportData?.data?.loanDetails?.loanType === 'Other'
                    ? reportData?.data?.loanDetails?.otherloanType
                    : reportData?.data?.loanDetails?.loanType
                }`}
              </p>
            </td>
          </tr>
          <tr className="bg text-center font-bold">
            <td colSpan={8}>
              <p className="justify-center">PERSONAL DATA</p>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <p className="bg pl-1 b-b text-center h-6"></p>
              <p className="pl-1 b-b h-6">Name</p>
              <p className="pl-1 b-b h-6">Date of Birth</p>
              <p className="pl-1 b-b h-6">Qualifications</p>
              <p className="pl-1 b-b h-6">Current Experience</p>
              <p className="pl-1 b-b h-6">Overall Experience</p>
              <p className="pl-1 h-6">Nature of Business</p>
            </td>
            <td colSpan={7}>
              <div
                className={`grid grid-cols-${reportData?.data?.personalDetails?.applicants?.length}`}
              >
                {reportData?.data?.personalDetails?.applicants.map(
                  (item: any, index: number) => (
                    <div
                      className={
                        index <
                        reportData?.data?.personalDetails?.applicants?.length -
                          1
                          ? 'b-r'
                          : ''
                      }
                    >
                      <p className="bg pl-1 b-b text-center font-bold h-6">
                        {index === 0 ? 'Applicant' : 'Co-Applicant ' + index}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {item.name !== '' ? item.name : 'Nil'}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {item.dobDoi !== ''
                          ? moment(item.dobDoi).format('DD-M-YYYY')
                          : 'Nil'}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {item.qualification !== ''
                          ? item.qualification === 'Other'
                            ? item.otherqualification
                            : item.qualification
                          : 'Nil'}
                      </p>
                      <p className="pl-1 b-b h-6">{item.currExp} Years</p>
                      <p className="pl-1 b-b h-6">{item.overallExp} Years</p>
                      <p className="pl-1">
                        {item.natureOfBusiness !== ''
                          ? item.natureOfBusiness === 'Other'
                            ? item.othernatureOfBusiness
                            : item.natureOfBusiness
                          : 'Nil'}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <p className="bg pl-1 b-b text-center h-6"></p>
              <p className="pl-1 b-b h-6">Residence Address</p>
              <p className="pl-1 b-b h-6">Residence Status</p>
              <p className="pl-1 b-b h-6">Residing Since</p>
              <p className="pl-1 b-b h-12">Residential Area</p>
              <p className="pl-1 h-12">Residential Value (Rs.)</p>
            </td>
            <td colSpan={7}>
              <div
                className={`grid grid-cols-${reportData?.data?.personalDetails.residents.length}`}
              >
                {reportData?.data?.personalDetails.residents.map(
                  (item: any, index: number) => (
                    <div
                      className={
                        index <
                        reportData?.data?.personalDetails.applicants.length - 1
                          ? 'b-r'
                          : ''
                      }
                    >
                      <p className="bg pl-1 b-b text-center font-bold h-6">
                        {'Address ' + (index + 1)}
                      </p>
                      <p className="pl-1 b-b h-6">{item.resiAddress}</p>
                      <p className="pl-1 b-b h-6">
                        {item.resiStatus === 'Other'
                          ? item.otherresiStatus
                          : item.resiStatus.slice(0, -1)}
                      </p>
                      <p className="pl-1 b-b h-6">{item.resiSince}</p>
                      <p className="pl-1 b-b h-12">
                        Buildup Area: {item.buildArea} Sq. Ft. <br />
                        Carpet Area: {item.carpetArea} Sq. Ft.
                      </p>
                      {item.resiStatus !== 'RentalN' && (
                        <p className="pl-1 h-12">
                          Purchase Value: {amtConvertor(item.purchaseValue)}
                          <br />
                          Market Value: {amtConvertor(item.marketValue)}
                        </p>
                      )}
                      {item.resiStatus === 'RentalN' && (
                        <p className="pl-1 h-12">
                          Rent: {amtConvertor(item.rentPm * 12)} p.a.
                          <br />
                        </p>
                      )}
                    </div>
                  ),
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={1}
              rowSpan={
                reportData?.data?.personalDetails.familyDetails.length + 1
              }
            >
              <p className="pl-1">Family Background</p>
            </td>
            <td className="bg font-bold text-center h-6" colSpan={3}>
              <p>Name</p>
            </td>
            <td className="bg font-bold text-center h-6" colSpan={2}>
              <p>Relation</p>
            </td>
            <td className="bg font-bold text-center h-6" colSpan={2}>
              <p>Earning/Dependent</p>
            </td>
          </tr>
          {reportData?.data?.personalDetails.familyDetails.map((item: any) => (
            <tr>
              <td colSpan={3} className="text-center">
                <p className="pl-1 h-6">{item.name}</p>
              </td>
              <td colSpan={2} className="text-center">
                <p className="pl-1 h-6">
                  {item.relation === 'Other'
                    ? item.otherrelation
                    : item.relation}
                </p>
              </td>
              <td colSpan={2} className="text-center">
                <p className="pl-1 h-6">
                  {item.earningStatus === 'Other'
                    ? item.otherearningStatus
                    : item.earningStatus}
                </p>
              </td>
            </tr>
          ))}
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="my-2 justify-center">BUSINESS DATA</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>ASBS &amp; Co. Observations</p>
            </td>
            <td colSpan={7}>
              <div className="flex mt-2 mx-2 font-bold">
                <p>Income Sources:</p>
              </div>
              <div className="flex justify-end mx-4 font-bold">
                <p>(Amt in Rs.)</p>
              </div>
              <div className="flex justify-between mt-1 mb-4 mx-4">
                <div className="flex w-full border-[1.5px] border-r-0 border-black">
                  <div className="w-4/12">
                    <div className="b-r">
                      <p className="bg pl-1 b-b h-6 text-center font-bold">
                        Particulars
                      </p>
                      <p className="pl-1 b-b h-6">Turnover</p>
                      <p className="pl-1 b-b h-6">Entity</p>
                      <p className="pl-1 b-b h-6">Gross Profit</p>
                      <p className="pl-1 b-b h-6">Net Margin</p>
                      <p className="pl-1 b-b h-6">Share of Profit</p>
                      <p className="pl-1 b-b h-6">
                        {reportData?.data?.businessDetails?.designation}'s
                        Salary
                      </p>
                      <p className="pl-1 b-b h-6">
                        {reportData?.data?.businessDetails?.designation}'s
                        Remuneration
                      </p>
                      <p className="pl-1 b-b h-6">Other Income</p>
                      <p className="pl-1 b-b h-6 text-center font-bold">
                        Total
                      </p>
                      <p className="text-center font-bold">Grand Total</p>
                    </div>
                  </div>
                  <div
                    className={`w-8/12 grid grid-cols-${reportData?.data?.financials?.finances?.length} text-center`}
                  >
                    {reportData?.data?.financials?.finances?.map(
                      (item: any) => (
                        <div className="b-r">
                          <p className="bg pl-1 b-b font-bold h-6 text-center">
                            {item.applicantIncome}
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(
                              item.income.turnoverGrossReciepts.amountPA,
                            )}
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {item.entityName}
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(item.income.grossProfit)} (
                            {item.income.grossProfitPer}%)
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(item.expenses.netProfitPA)} (
                            {item.expenses.netProfitPM}%)
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(item.expenses.shareOfProfitPA)} (
                            {item.expenses.shareOfProfitPM}%)
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(
                              item.businessIncome.salaryFromBusiness.amountPA,
                            )}
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(
                              item.businessIncome.remunerationFromBusiness
                                .amountPA,
                            )}
                          </p>
                          <p className="pl-1 b-b h-6 text-center">
                            {amtConvertor(item.businessIncome.rent.amountPA)}
                          </p>
                          <p className="pl-1 b-b h-6 font-bold text-center">
                            {amtConvertor(
                              item.expenses.netProfitPA +
                                item.businessIncome.salaryFromBusiness
                                  .amountPA +
                                item.businessIncome.remunerationFromBusiness
                                  .amountPA +
                                item.businessIncome.rent.amountPA,
                            )}
                          </p>
                        </div>
                      ),
                    )}
                    <p className="b-r font-bold text-right">
                      {amtConvertor(reportData?.data?.financials?.totalEarning)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    -{' '}
                    {reportData?.data?.businessDetails?.howTurnoverVerified ===
                    'Other'
                      ? reportData?.data?.businessDetails
                          ?.otherhowTurnoverVerified
                      : reportData?.data?.businessDetails?.howTurnoverVerified}
                  </li>
                  <li>
                    - It’s advised to cross check income with ITR & Financial
                    statements for last 3 years as during visit it we were not
                    provided.
                  </li>
                </ul>
                <p className="my-4 font-bold">Assets Backing:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - Asset & Investment Backing:{' '}
                    {amtConvertor(reportData?.data?.assets?.assetsBacking)}
                    <br />
                    (For the detail of assets please refer “Assets Head +
                    Investment” below)
                  </li>
                </ul>
                {reportData?.data?.assets?.assetReason !== '' && (
                  <>
                    <p className="my-4 font-bold">Note:</p>
                    <ul className="ml-6 mb-6">
                      <li>- {reportData?.data?.assets?.assetReason}</li>
                    </ul>
                  </>
                )}

                <p className="my-4 font-bold">Existing Commitments:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    - EMI Commitments:{' '}
                    {reportData?.data?.existanceLoan?.existanceLoan
                      ?.balanceTransfer?.length === 0 &&
                    reportData?.data?.existanceLoan?.existanceLoan
                      ?.existingLoanClosed?.length === 0 &&
                    reportData?.data?.existanceLoan?.existanceLoan
                      ?.existingLoanEMI?.length === 0 ? (
                      'Nil'
                    ) : (
                      <>
                        {amtConvertor(
                          parseFloat(
                            reportData?.data?.existingLoan?.existanceLoan
                              ?.totalLoanBtEmi,
                          ) *
                            12 +
                            parseFloat(
                              reportData?.data?.existingLoan?.existanceLoan
                                ?.totalLoanEcEmi,
                            ) *
                              12 +
                            parseFloat(
                              reportData?.data?.existingLoan?.existanceLoan
                                ?.totalLoanEmEmi,
                            ) *
                              12,
                        )}
                        <ul className="ml-6 mb-2">
                          <li>
                            {`(Out of which Rs.
                            ${amtConvertor(
                              parseFloat(
                                reportData?.data?.existingLoan?.existanceLoan
                                  ?.totalLoanBtEmi,
                              ) * 12,
                            )}
                            is subject to balance transfer.)`}
                          </li>
                          <li>
                            {`(Out of which Rs. ${amtConvertor(
                              parseFloat(
                                reportData?.data?.existingLoan?.existanceLoan
                                  ?.totalLoanEcEmi,
                              ) * 12,
                            )} Cr. is subject to subject to
                            closure within 12 months.)`}
                          </li>
                        </ul>
                      </>
                    )}
                  </li>
                  <li>
                    - Other Commitments:{' '}
                    {reportData?.data?.existanceLoan?.otherCommitments
                      ?.commitmentsDetails?.length === 0 ? (
                      'Nil'
                    ) : (
                      <>
                        Rs.{' '}
                        {amtConvertor(
                          parseFloat(
                            reportData?.data?.existingLoan?.otherCommitments
                              ?.totalCon,
                          ),
                        )}
                      </>
                    )}
                  </li>
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
                      <p className="ml-6">{`${(
                        (reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount *
                          100) /
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.agreementValue
                      ).toFixed(2)}% (${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount,
                      )} / ${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.agreementValue,
                      )})`}</p>
                      <p>As per Purchase Value:</p>
                      <p className="ml-6">{`${(
                        (reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount *
                          100) /
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.purchaseValue
                      ).toFixed(2)}% (${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount,
                      )} / ${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.purchaseValue,
                      )})`}</p>
                      <p>As per Market Value:</p>
                      <p className="ml-6">{`${(
                        (reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount *
                          100) /
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.marketValue
                      ).toFixed(2)}% (${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.loanDetails?.amount,
                      )} / ${amtConvertor(
                        reportData?.data?.detailsOfProp?.propertyLoanDetails
                          ?.propertyValue?.marketValue,
                      )})`}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>EMI Commitments to Total Earning(FOIR)</p>
                    </td>
                    <td colSpan={2}>
                      <p className="ml-6">
                        {
                          reportData?.data?.comitmentSummary
                            ?.totalCommitmentsRatio
                        }
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    {`- Proposed EMI at ${reportData?.data?.detailsOfProp
                      ?.propertyLoanDetails?.loanDetails?.roi}% for ${reportData
                      ?.data?.detailsOfProp?.propertyLoanDetails?.loanDetails
                      ?.year} years on ${amtConvertor(
                      reportData?.data?.detailsOfProp?.propertyLoanDetails
                        ?.loanDetails?.amount,
                    )} comes to Rs. ${reportData?.data?.detailsOfProp
                      ?.propertyLoanDetails?.loanDetails?.emi} p.m.`}
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
              {reportData?.data?.personalDetails?.applicants?.map(
                (item: any) => (
                  <>
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
                        <li>{`- Applicant has completed ${
                          item?.qualification
                            ? item?.otherqualification
                            : item?.qualification
                        } in year ${item?.studyFinish}.`}</li>
                        <li>{`- Previously applicant has worked for ${item?.pastExp} years.`}</li>
                        <li>{`- Applicant started business in year ${item?.businessStart}.`}</li>
                      </ul>
                    </div>
                  </>
                ),
              )}

              {reportData?.data?.businessOf?.details?.label &&
                Object.values(reportData?.data?.businessOf?.details?.label)
                  ?.length > 0 && (
                  <>
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
                        {Object.values(
                          reportData?.data?.businessOf?.details?.label,
                        )?.map((item: any) => <li>- {parse(item)}</li>)}
                      </ul>
                    </div>
                  </>
                )}
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
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.lastYears
                            ?.firstLastYear,
                        )}
                      </p>
                    </td>
                    <td rowSpan={2}>
                      <p>
                        {
                          reportData?.data?.turnoverDetails?.lastYears
                            ?.reasonforDiff
                        }
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2022 (as per F.S.)</p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.lastYears
                            ?.firstLastYear,
                        )}
                      </p>
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
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.currentYearActual
                            ?.asPerFinancials?.turnover,
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.currentYearActual
                            ?.asPerFinancials?.netProfit,
                        )}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>March-2023 (Actuals)</p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.currentYearActual
                            ?.actuals?.turnover,
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.currentYearActual
                            ?.actuals?.netProfit,
                        )}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>April-2023 till Date (Actuals)</p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.aprilTillDate
                            ?.aprilTillDate?.turnover,
                        )}
                      </p>
                    </td>
                    <td>
                      <p>
                        {amtConvertor(
                          reportData?.data?.turnoverDetails?.aprilTillDate
                            ?.aprilTillDate?.netProfit,
                        )}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-4">
                <p className="my-4 font-bold">Note:</p>
                <ul className="ml-6 mb-6">
                  <li>
                    {`- Turnover of March-{moment().year()} is ${reportData
                      ?.data?.turnoverDetails?.currentLastYearComparision
                      ?.changes} compared to March-${moment()
                      .subtract(1, 'y')
                      .year()}`}
                  </li>
                  <li>
                    -{' '}
                    {
                      reportData?.data?.turnoverDetails
                        ?.currentLastYearComparision?.reasonforDiff
                    }
                  </li>
                </ul>
              </div>
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
                  <li>
                    -{' '}
                    {reportData?.data?.turnoverDetails
                      ?.bussinessTrendLast2Year === 'Other'
                      ? reportData?.data?.turnoverDetails
                          ?.otherbussinessTrendLast2Year
                      : reportData?.data?.turnoverDetails
                          ?.bussinessTrendLast2Year}
                    .
                  </li>
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
                  -{' '}
                  {reportData?.data?.turnoverDetails?.futureProjection ===
                  'Other'
                    ? reportData?.data?.turnoverDetails?.otherfutureProjection
                    : reportData?.data?.turnoverDetails?.futureProjection}
                  .
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name of Entity</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.bussinessName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Type of Entity</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.businessDetails?.typeOfEntity === 'Other'
                  ? reportData?.data?.businessDetails?.othertypeOfEntity
                  : reportData?.data?.businessDetails?.typeOfEntity}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Age of Entity (Years)</p>
            </td>
            <td colSpan={7}>
              <p>
                {moment().year() -
                  parseInt(
                    reportData?.data?.businessDetails?.yearOfIncorporation,
                  )}{' '}
                Years
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>PD Conducted with</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.pdConductWith}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Designation</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.businessDetails?.designation === 'Other'
                  ? reportData?.data?.businessDetails?.otherdesignation
                  : reportData?.data?.businessDetails?.designation}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Office Address</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.regOfficeAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visited Address</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.visitedAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Vicinity</p>
            </td>
            <td colSpan={7}>
              \
              <p>
                {reportData?.data?.businessDetails?.vicinity === 'Other'
                  ? reportData?.data?.businessDetails?.othervicinity
                  : reportData?.data?.businessDetails?.vicinity}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ownership</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.businessDetails?.ownership === 'Other'
                  ? reportData?.data?.businessDetails?.otherownership
                  : reportData?.data?.businessDetails?.ownership}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Phone Number</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.mobile}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Visit Date and Time</p>
            </td>
            <td colSpan={7}>
              <p>
                {`${reportData?.data?.pdDetails?.pdVisitDate} at ${reportData?.data?.pdDetails?.pdConductTime}`}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>No. of Visits</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.noOfVisit}</p>
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
                {amtConvertor(
                  parseInt(
                    reportData?.data?.detailsOfProp?.propertyLoanDetails
                      ?.loanAsPerForm,
                  ),
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Loan Applied (As per P.D.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp?.propertyLoanDetails
                    ?.loanDetails.amount,
                )}
              </p>
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
              <p>Family Members in Business</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.familyBusiness}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Generation</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.businessDetails?.generation === 'Other'
                  ? reportData?.data?.businessDetails?.othergeneration
                  : reportData?.data?.businessDetails?.generation}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.businessDetails.shareHoldings?.length + 1
              }
            >
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
          {reportData?.data?.businessDetails.shareHoldings.map((item: any) => (
            <tr>
              <td colSpan={2}>
                <p>{reportData?.data?.businessDetails?.bussinessName}</p>
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
              <p>{reportData?.data?.businessDetails?.mainUseproducts}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Documents seen Sales/Purchase/LL Documents /Any other</p>
            </td>
            <td colSpan={7}>
              <ul id="l2">
                {docsList?.length === 0 ? (
                  <li>
                    - { reportData?.data?.documentsSeen?.note}
                  </li>
                ) : (
                  docsList?.map((item: any) => (
                    <li data-list-text="-">- {item?.label}</li>
                  ))
                )}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Cities of Representation of Business</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.businessDetails?.citiesOfReppresentation ===
                'Other'
                  ? reportData?.data?.businessDetails
                      ?.othercitiesOfReppresentation
                  : reportData?.data?.businessDetails?.citiesOfReppresentation}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Period Provided to Customers</p>
            </td>
            <td colSpan={7}>
              <p>
                {`${reportData?.data?.clientDebtors?.debitors?.debitorDetails?.creditPeriodAllowed} Months`}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Credit Period given by Suppliers</p>
            </td>
            <td colSpan={7}>
              <p>{`${reportData?.data?.suppliers?.creitPeriodAllowed} Months`}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Key Competitors to Business</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails?.competitorsOfBusiness}</p>
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
              <p>{reportData?.data?.businessDetails?.empSpecified}</p>
            </td>
            <td colSpan={3}>
              <p>{reportData?.data?.businessDetails?.empSeen}</p>
            </td>
            <td colSpan={2}>
              <p>
                {amtConvertor(
                  reportData?.data?.financials?.finances[0]?.expenses?.salary
                    ?.amountPA,
                )}
              </p>
            </td>
          </tr>
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="my-2 justify-center">FINANCIAL DATA</p>
            </td>
          </tr>
          <tr>
            <td colSpan={1}>
              <p className="bg b-b h-6"></p>
              <p className="b-b h-12">Turnover (Rs.)</p>
              <p className="b-b h-12">Purchases (Rs.)</p>
              <p className="b-b h-12">Net Margin</p>
              <p className="b-b h-6">Other Income (Rs.)</p>
              <p className="h-auto">Total Expenses (Rs.)</p>
            </td>
            <td colSpan={1}>
              <p className="bg pl-1 b-b text-center h-6"></p>
              <p className="pl-1 b-b h-6">Monthly</p>
              <p className="pl-1 b-b h-6">Annual</p>
              <p className="pl-1 b-b h-6">Monthly</p>
              <p className="pl-1 b-b h-6">Annual</p>
              <p className="pl-1 b-b h-12">
                Value: <br />
                Percentage:
              </p>
              <p className="pl-1 b-b h-6">Annual</p>
              <p className="pl-1 h-6">Annual</p>
            </td>
            <td colSpan={6}>
              <div
                className={`grid grid-cols-${reportData?.data?.financials?.finances.length}`}
              >
                {reportData?.data?.financials?.finances.map(
                  (item: any, index: number) => (
                    <div
                      className={
                        index <
                        reportData?.data?.financials?.finances?.length - 1
                          ? 'b-r'
                          : ''
                      }
                    >
                      <p className="bg pl-1 b-b text-center font-bold h-6">
                        {index === 0 ? 'Applicant' : 'Co-Applicant ' + index}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {amtConvertor(
                          item.income.turnoverGrossReciepts.amountPM,
                        )}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {amtConvertor(
                          item.income.turnoverGrossReciepts.amountPA,
                        )}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {amtConvertor(item.income.purchases.amountPM)}
                      </p>
                      <p className="pl-1 b-b h-6">
                        {amtConvertor(item.income.purchases.amountPA)}
                      </p>
                      <p className="pl-1 b-b h-12">
                        {amtConvertor(item.expenses.netProfitPA)} <br />
                        {item.expenses.netProfitPM}%
                      </p>
                      <p className="pl-1 b-b h-6">
                        {`Rent: ${amtConvertor(
                          item.businessIncome.rent.amountPA,
                        )}`}
                      </p>
                      <p className="pl-1">
                        {item.expenses.salary.amountPM > 0 && (
                          <>
                            {`Salary: ${amtConvertor(
                              item.expenses.salary.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.maintanance.amountPM > 0 && (
                          <>
                            {`Maintanance: ${amtConvertor(
                              item.expenses.maintanance.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.transport.amountPM > 0 && (
                          <>
                            {`Transport: ${amtConvertor(
                              item.expenses.transport.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.electricity.amountPM > 0 && (
                          <>
                            {`Electricity: ${amtConvertor(
                              item.expenses.electricity.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.travelling.amountPM > 0 && (
                          <>
                            {`Travelling: ${amtConvertor(
                              item.expenses.travelling.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.fuel.amountPM > 0 && (
                          <>
                            {`Fuel: ${amtConvertor(
                              item.expenses.fuel.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.officeRent.amountPM > 0 && (
                          <>
                            {`Office Rent: ${amtConvertor(
                              item.expenses.officeRent.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.partnersSalary.amountPM > 0 && (
                          <>
                            {`Partner's Salary: ${amtConvertor(
                              item.expenses.partnersSalary.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.partnersRemuneration.amountPM > 0 && (
                          <>
                            {`Partner's Remuneration: ${amtConvertor(
                              item.expenses.partnersRemuneration.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.otherExpenses.amountPM > 0 && (
                          <>
                            {`Other Expenses: ${amtConvertor(
                              item.expenses.otherExpenses.amountPA,
                            )}`}
                            <br />
                          </>
                        )}
                        {item.expenses.totalExpensePA > 0 && (
                          <>
                            {`Total Expenses: ${amtConvertor(
                              parseFloat(item.expenses.totalExpensePA),
                            )}`}
                            <br />
                          </>
                        )}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td rowSpan={1}>
              <p>Assets in Value (Rs.)</p>
            </td>
            <td colSpan={7}>
              <div className="my-2 mx-4">
                <p className="font-bold">Business Assets:</p>
                {reportData?.data?.assets.bussinessAssetDetails.bussinessAssets
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
                      {reportData?.data?.assets.bussinessAssetDetails.bussinessAssets.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>
                                {item.particulars === 'Other'
                                  ? item.otherparticulars
                                  : item.particulars}
                              </p>
                            </td>
                            <td>
                              <p>{item.location}</p>
                            </td>
                            <td>
                              <p>{item.purchaseYear}</p>
                            </td>
                            <td>
                              <p>{item.carpetArea} Sq. Ft.</p>
                            </td>
                            <td>
                              <p>
                                {item.status === 'Other'
                                  ? item.otherstatus
                                  : item.status.slice(0, -1)}
                              </p>
                            </td>
                            <td>
                              <p>{amtConvertor(item.marketValue)}</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={5}>
                          <p className="justify-center font-bold">Total</p>
                        </td>
                        <td>
                          <p className="font-bold">
                            {amtConvertor(
                              reportData?.data?.assets.bussinessAssetDetails
                                .totalMarketValue,
                            )}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No Business Assets</p>
                )}
                <p className="font-bold my-4">Personal Assets:</p>
                {reportData?.data?.assets.personalAssetDetails.personalAssets
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
                      {reportData?.data?.assets.personalAssetDetails.personalAssets.map(
                        (item: any, index: number) => (
                          <tr key={index}>
                            <td>
                              <p>
                                {item.particulars === 'Other'
                                  ? item.otherparticulars
                                  : item.particulars}
                              </p>
                            </td>
                            <td>
                              <p>{item.location}</p>
                            </td>
                            <td>
                              <p>{item.purchaseYear}</p>
                            </td>
                            <td>
                              <p>{item.carpetArea} Sq. Ft.</p>
                            </td>
                            <td>
                              <p>
                                {item.status === 'Other'
                                  ? item.otherstatus
                                  : item.status.slice(0, -1)}
                              </p>
                            </td>
                            <td>
                              <p>{amtConvertor(item.marketValue)}</p>
                            </td>
                          </tr>
                        ),
                      )}
                      <tr>
                        <td colSpan={5}>
                          <p className="justify-center font-bold">Total</p>
                        </td>
                        <td>
                          <p className="font-bold">
                            {amtConvertor(
                              reportData?.data?.assets.bussinessAssetDetails
                                .totalMarketValue,
                            )}
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
              <div className="my-2 mx-4">
                {reportData?.data?.clientDebtors.debitors.isDebitorDetails ===
                'Yes' ? (
                  <>
                    <table cellSpacing={0} className="w-full mx-auto">
                      <tbody>
                        <tr className="bg">
                          <td>
                            <p>Particulars</p>
                          </td>
                          <td>
                            <p>Amount (Rs.)</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>{'Due >/= 6 Months'}</p>
                          </td>
                          <td>
                            <p>
                              {amtConvertor(
                                reportData?.data?.clientDebtors.debitors
                                  ?.debitorDetails?.moreThan6Month?.amount,
                              )}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>{'Due < 6 Months'}</p>
                          </td>
                          <td>
                            <p>
                              {amtConvertor(
                                reportData?.data?.clientDebtors.debitors
                                  ?.debitorDetails?.lessThan6Month?.amount,
                              )}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="font-bold">Total</p>
                          </td>
                          <td>
                            <p className="font-bold">
                              {amtConvertor(
                                reportData?.data?.clientDebtors.debitors
                                  ?.debitorDetails?.totalDebtors,
                              )}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="my-4 grid grid-cols-2">
                      <span>Average Debtor to Turnover Ratio:</span>
                      <span>
                        {
                          reportData?.data?.clientDebtors.debitors
                            ?.debitorDetails?.collectionPeriod
                        }
                      </span>
                      <span>Total Debtors/Turnover</span>
                      <span>{`(${amtConvertor(
                        reportData?.data?.clientDebtors.debitors?.debitorDetails
                          ?.totalDebtors,
                      )} / ${amtConvertor(
                        reportData?.data?.financials?.finances[0]?.income
                          .turnoverGrossReciepts.amountPA,
                      )})`}</span>
                      <span className="w-1/2 mt-2">
                        Regularity on Cash Flow:
                      </span>
                      <span className="w-1/2 mt-2">Regular</span>
                    </div>
                  </>
                ) : (
                  <p>No outstanding from debtors</p>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.clientDebtors?.clients?.clientDetails
                  ?.majorClient?.length + 1
              }
            >
              <p>Major Clients</p>
            </td>
            {reportData?.data?.clientDebtors?.clients?.clientDetails
              ?.majorClient?.length > 0 ? (
              <>
                <td colSpan={2} className="bg">
                  <p>Sr. No.</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Name of Client</p>
                </td>
                <td colSpan={3} className="bg">
                  <p>Contact No.</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>Client's details not provided</p>
              </td>
            )}
          </tr>
          {reportData?.data?.clientDebtors?.clients?.clientDetails?.majorClient?.map(
            (item: any, index: number) => (
              <tr>
                <td colSpan={2}>
                  <p>{index + 1}</p>
                </td>
                <td colSpan={2}>
                  <p>{item?.clientName}</p>
                </td>
                <td colSpan={3}>
                  <p>{item?.contact}</p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td>
              <p>Creditors as on date</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.suppliers?.creditors?.amount !== 0
                  ? `${amtConvertor(
                      reportData?.data?.suppliers?.creditors?.amount,
                    )} ${
                      reportData?.data?.suppliers?.whyCreditorHighThanCredit !==
                        '' &&
                      `(Creditors are high because ${reportData?.data?.suppliers?.whyCreditorHighThanCredit})`
                    }`
                  : 'NA'}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.suppliers?.suppliersDetails?.majorSuppliers
                  ?.length + 1
              }
            >
              <p>Major Supplier</p>
            </td>
            {reportData?.data?.suppliers?.suppliersDetails?.majorSuppliers
              ?.length > 0 ? (
              <>
                <td colSpan={2} className="bg">
                  <p>Sr. No.</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Name of Client</p>
                </td>
                <td colSpan={3} className="bg">
                  <p>Contact No.</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Suppliers in the business.</p>
              </td>
            )}
          </tr>
          {reportData?.data?.suppliers?.suppliersDetails?.majorSuppliers?.map(
            (item: any, index: number) => (
              <tr>
                <td colSpan={2}>
                  <p>{index + 1}</p>
                </td>
                <td colSpan={2}>
                  <p>{item?.clientName}</p>
                </td>
                <td colSpan={3}>
                  <p>{item?.contact}</p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td>
              <p>Stock Level as on date</p>
            </td>
            <td colSpan={7}>
              <div className="my-2 mx-4">
                {reportData?.data?.stocks.isStockDetails === 'Yes' ? (
                  <>
                    <table cellSpacing={0} className="w-full mx-auto">
                      <tbody>
                        <tr className="bg">
                          <td>
                            <p>Particulars</p>
                          </td>
                          <td>
                            <p>Amount (Rs.)</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Raw Materials</p>
                          </td>
                          <td>
                            <p>
                              {amtConvertor(
                                reportData?.data?.stocks.stockDetails
                                  ?.rawMaterialAmount,
                              )}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>WIP</p>
                          </td>
                          <td>
                            <p>
                              {amtConvertor(
                                reportData?.data?.stocks.stockDetails
                                  ?.wipAmount,
                              )}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Finish Goods</p>
                          </td>
                          <td>
                            <p>
                              {amtConvertor(
                                reportData?.data?.stocks.stockDetails
                                  ?.finishGoods,
                              )}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="font-bold">Total</p>
                          </td>
                          <td>
                            <p className="font-bold">
                              {amtConvertor(
                                reportData?.data?.stocks.stockDetails
                                  ?.totalStocks,
                              )}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="my-4 grid grid-cols-2">
                      <span>Average Stock to Turnover Ratio:</span>
                      <span>
                        {
                          reportData?.data?.stocks.stockDetails
                            ?.stockHoldingPeriod
                        }
                      </span>
                      <span>Total Stock/Turnover</span>
                      <span>{`(${amtConvertor(
                        reportData?.data?.stocks.stockDetails?.totalStocks,
                      )} / ${amtConvertor(
                        reportData?.data?.financials?.finances[0]?.income
                          .turnoverGrossReciepts.amountPA,
                      )})`}</span>
                    </div>
                    <p className="mt-4 mb-2 font-bold">Note:</p>
                    <ul className="ml-6 mb-6">
                      <li>
                        {`- ${
                          reportData?.data?.businessDetails
                            ?.howTurnoverVerified === 'Other'
                            ? reportData?.data?.businessDetails
                                ?.otherhowTurnoverVerified
                            : reportData?.data?.businessDetails
                                ?.howTurnoverVerified
                        }`}
                      </li>
                    </ul>
                  </>
                ) : (
                  <p>Stock are not applicable.</p>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.assets.bankAccountDetails.bankAccounts
                  ?.length + 2
              }
            >
              <p>Bank Account Details</p>
            </td>
            {reportData?.data?.assets.bankAccountDetails.bankAccounts?.length >
            0 ? (
              <>
                <td colSpan={2} className="bg">
                  <p>Bank Name</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Branch</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Type</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Balance as on date (Rs.)</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Bank Account</p>
              </td>
            )}
          </tr>
          {reportData?.data?.assets.bankAccountDetails.bankAccounts.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={2}>
                  <p>
                    {item.bankName === 'Other'
                      ? item.otherbankName
                      : item.bankName}
                  </p>
                </td>
                <td colSpan={2}>
                  <p>{item.branch}</p>
                </td>
                <td colSpan={1}>
                  <p>{item.type === 'Other' ? item.othertype : item.type}</p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.balanceOnDay)}</p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td colSpan={5} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.assets.bankAccountDetails.totalBalance,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.assets.investmentDetails.investments?.length +
                2
              }
            >
              <p>Investments</p>
            </td>
            {reportData?.data?.assets.investmentDetails.investments?.length >
            0 ? (
              <>
                <td colSpan={3} className="bg">
                  <p>Particulars</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Contribution (Rs.)</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Market Value (Rs.)</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Investments</p>
              </td>
            )}
          </tr>
          {reportData?.data?.assets.investmentDetails.investments.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={3}>
                  <p>
                    {item.particulars === 'Other'
                      ? item.otherparticulars
                      : item.particulars}
                  </p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.contribution)}</p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.marketValue)}</p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td colSpan={5} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.assets.investmentDetails.totalMarketValue,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.existingLoan.existanceLoan.balanceTransfer
                  .length +
                reportData?.data?.existingLoan.existanceLoan.existingLoanClosed
                  .length +
                reportData?.data?.existingLoan.existanceLoan.existingLoanEMI
                  .length +
                2
              }
            >
              <p>Loan Details</p>
            </td>
            {reportData?.data?.existingLoan.existanceLoan.balanceTransfer
              .length > 0 ||
            reportData?.data?.existingLoan.existanceLoan.existingLoanClosed
              .length > 0 ||
            reportData?.data?.existingLoan.existanceLoan.existingLoanEMI
              .length > 0 ? (
              <>
                <td colSpan={1} className="bg">
                  <p>Type of loan</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Bank Name</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Loan Amount</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Tenure (Months)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>EMI (Rs.)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Outstanding (Rs.)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Remark</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Loans</p>
              </td>
            )}
          </tr>
          {reportData?.data?.existingLoan.existanceLoan.balanceTransfer.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={1}>
                  <p>
                    {item.typeOfLoan === 'Other'
                      ? item.othertypeOfLoan
                      : item.typeOfLoan}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.bankName === 'Other'
                      ? item.otherbankName
                      : item.bankName}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.loanAmount)}</p>
                </td>
                <td colSpan={1}>
                  <p>{item.tenureMonth}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.emi)}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.outstanding)}</p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.remark === 'Other' ? item.otherremark : item.remark}
                  </p>
                </td>
              </tr>
            ),
          )}
          {reportData?.data?.existingLoan.existanceLoan.existingLoanClosed.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={1}>
                  <p>
                    {item.typeOfLoan === 'Other'
                      ? item.othertypeOfLoan
                      : item.typeOfLoan}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.bankName === 'Other'
                      ? item.otherbankName
                      : item.bankName}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.loanAmount)}</p>
                </td>
                <td colSpan={1}>
                  <p>{item.tenureMonth}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.emi)}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.outstanding)}</p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.remark === 'Other' ? item.otherremark : item.remark}
                  </p>
                </td>
              </tr>
            ),
          )}
          {reportData?.data?.existingLoan.existanceLoan.existingLoanEMI.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={1}>
                  <p>
                    {item.typeOfLoan === 'Other'
                      ? item.othertypeOfLoan
                      : item.typeOfLoan}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.bankName === 'Other'
                      ? item.otherbankName
                      : item.bankName}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.loanAmount)}</p>
                </td>
                <td colSpan={1}>
                  <p>{item.tenureMonth}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.emi)}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.outstanding)}</p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.remark === 'Other' ? item.otherremark : item.remark}
                  </p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td colSpan={2} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  parseFloat(
                    reportData?.data?.existingLoan.existanceLoan.totalLoanBt,
                  ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan.totalLoanEc,
                    ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan.totalLoanEm,
                    ),
                )}
              </p>
            </td>
            <td colSpan={1} className="font-bold">
              <p>
                {amtConvertor(
                  parseFloat(
                    reportData?.data?.existingLoan.existanceLoan.totalLoanBtEmi,
                  ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan
                        .totalLoanEcEmi,
                    ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan
                        .totalLoanEmEmi,
                    ),
                )}
              </p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  parseFloat(
                    reportData?.data?.existingLoan.existanceLoan.totalLoanBtOut,
                  ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan
                        .totalLoanEcOut,
                    ) +
                    parseFloat(
                      reportData?.data?.existingLoan.existanceLoan
                        .totalLoanEmOut,
                    ),
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.existingLoan.creditFacility.creditDetails
                  ?.length + 2
              }
            >
              <p>Credit Facility</p>
            </td>
            {reportData?.data?.existingLoan.creditFacility.creditDetails
              ?.length > 0 ? (
              <>
                <td colSpan={1} className="bg">
                  <p>Type of Facility</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Bank Name</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Limit (Rs.)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Average Utilization (Rs.)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Interest Rate (%)</p>
                </td>
                <td colSpan={1} className="bg">
                  <p>Remarks</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Credit Facility</p>
              </td>
            )}
          </tr>
          {reportData?.data?.existingLoan.creditFacility.creditDetails.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={1}>
                  <p>
                    {item.typeOfFacility === 'Other'
                      ? item.othertypeOfFacility
                      : item.typeOtypeOfFacilityfLoan}
                  </p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.bankName === 'Other'
                      ? item.otherbankName
                      : item.bankName}
                  </p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.limit)}</p>
                </td>
                <td colSpan={1}>
                  <p>{amtConvertor(item.averageUtilization)}</p>
                </td>
                <td colSpan={1}>
                  <p>{item.interestRate}</p>
                </td>
                <td colSpan={1}>
                  <p>
                    {item.remark === 'Other' ? item.otherremark : item.remark}
                  </p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td colSpan={2} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.existingLoan.creditFacility
                    ?.totalLoanCfLimit,
                )}
              </p>
            </td>
            <td colSpan={3} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.existingLoan.creditFacility?.totalLoanCfAu,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td
              rowSpan={
                reportData?.data?.existingLoan.otherCommitments
                  .commitmentsDetails?.length + 2
              }
            >
              <p>Other Commitments</p>
            </td>
            {reportData?.data?.existingLoan.otherCommitments.commitmentsDetails
              ?.length > 0 ? (
              <>
                <td colSpan={3} className="bg">
                  <p>Particulars</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Contribution P.A. (Rs.)</p>
                </td>
                <td colSpan={2} className="bg">
                  <p>Sum Assured/Maturity Value (Rs.)</p>
                </td>
              </>
            ) : (
              <td colSpan={7}>
                <p>No Commitments</p>
              </td>
            )}
          </tr>
          {reportData?.data?.existingLoan.otherCommitments.commitmentsDetails.map(
            (item: any, index: number) => (
              <tr key={index}>
                <td colSpan={3}>
                  <p>
                    {item.particulars === 'Other'
                      ? item.otherparticulars
                      : item.particulars}
                  </p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.contribution)}</p>
                </td>
                <td colSpan={2}>
                  <p>{amtConvertor(item.sumAssured)}</p>
                </td>
              </tr>
            ),
          )}
          <tr>
            <td colSpan={3} className="font-bold">
              <p>Total</p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.existingLoan.otherCommitments.totalCon,
                )}
              </p>
            </td>
            <td colSpan={2} className="font-bold">
              <p>
                {amtConvertor(
                  reportData?.data?.existingLoan.otherCommitments.totalSum,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>GSTIN</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.businessDetails.gstNumber}</p>
            </td>
          </tr>
          <tr className="font-bold text-center">
            <td colSpan={8}>
              <p className="my-2 justify-center">
                Details of Property to be mortgage
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name of the Builder (If Under Construction Property)</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.detailsOfProp.builderName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Address of the Property</p>
            </td>
            <td colSpan={7}>
              <p>{reportData?.data?.detailsOfProp.loanPropertyAddress}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Date of Purchase</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.detailsOfProp.purchaseYear === 'Select Year'
                  ? reportData?.data?.detailsOfProp.otherpurchaseYear
                  : reportData?.data?.detailsOfProp.purchaseYear}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Area</p>
            </td>
            <td colSpan={7}>
              <p>
                Built-up Area: {reportData?.data?.detailsOfProp.buildUpArea} Sq.
                Ft.
              </p>
              <p>
                Carpet Area: {reportData?.data?.detailsOfProp.caretArea} Sq. Ft.
              </p>
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
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .propertyValue.agreementValue,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Purchase Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .propertyValue.purchaseValue,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Market Value (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .propertyValue.marketValue,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>OCR Already Paid (Rs.)</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .propertyValue.ocrPaid,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Loan Expected (Rs.) (HL)</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .loanDetails.amount,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Balance OCR</p>
            </td>
            <td colSpan={4}>
              <p>
                {amtConvertor(
                  reportData?.data?.detailsOfProp.propertyLoanDetails
                    .propertyValue.balanceOcr,
                )}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <p>Source of Balance OCR</p>
            </td>
            <td colSpan={4}>
              <p>
                {reportData?.data?.detailsOfProp.propertyLoanDetails
                  .propertyValue.sourceOcr === 'Other'
                  ? reportData?.data?.detailsOfProp.propertyLoanDetails
                      .propertyValue.othersourceOcr
                  : reportData?.data?.detailsOfProp.propertyLoanDetails
                      .propertyValue.sourceOcr}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Occupied By</p>
            </td>
            <td colSpan={7}>
              <p>
                {reportData?.data?.detailsOfProp.occupiedBy === 'Other'
                  ? reportData?.data?.detailsOfProp.otheroccupiedBy
                  : reportData?.data?.detailsOfProp.occupiedBy}
              </p>
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
                {reportData?.data?.observations.businessPlateName.exist}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                2.Activtity Seen:{' '}
                {reportData?.data?.observations.activity.exist} (
                {reportData?.data?.observations.activity.reasonForNo === 'Other'
                  ? reportData?.data?.observations.activity.otherreasonForNo
                  : reportData?.data?.observations.activity.reasonForNo}
                )
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                3.Employees Seen:{' '}
                {reportData?.data?.businessDetails?.empSeen === 0
                  ? 'No'
                  : `Yes (${reportData?.data?.businessDetails.empSeen})`}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                4.Customer Seen: {reportData?.data?.observations.customer.exist}{' '}
                ({reportData?.data?.observations.customer.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                5.Stock seen: {reportData?.data?.observations.stock.exist} (
                {reportData?.data?.observations.stock.reasonForNo === 'Other'
                  ? reportData?.data?.observations.stock.otherreasonForNo
                  : reportData?.data?.observations.stock.reasonForNo}
                )
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>6. During Visit:</p>
              <ul className="ml-6 mb-1">
                <li>
                  -{' '}
                  {reportData?.data?.observations.duringVist.applicantDoing ===
                  'Other'
                    ? reportData?.data?.observations.duringVist
                        .otherapplicantDoing
                    : reportData?.data?.observations.duringVist.applicantDoing}
                </li>
                <li>
                  -{' '}
                  {reportData?.data?.observations.duringVist.employeesDoing ===
                  'Other'
                    ? reportData?.data?.observations.duringVist
                        .otheremployeesDoing
                    : reportData?.data?.observations.duringVist.employeesDoing}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                7.Third Party Check:{' '}
                {reportData?.data?.observations.thirdPartyCheck.exist} (
                {reportData?.data?.observations.thirdPartyCheck.reasonForNo})
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                8. Screenshot of CCTV of premises other than Visited:{' '}
                {reportData?.data?.observations.screenshotOfCCTV.exist}
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={7}>
              <p>
                9. Behaviour of applicant:{' '}
                {reportData?.data?.observations.behaviourOfApplicant === 'Other'
                  ? reportData?.data?.observations.otherbehaviourOfApplicant
                  : reportData?.data?.observations.behaviourOfApplicant}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="my-4">
        <h1 className="mb-2">Disclaimer Clause: -</h1>
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
      {/* <img width={50} height={50} src={activeItem?.assignTo?.profile} />
      <br /> */}
      <div className="my-4">
        <h1>Authorised Signatory</h1>
        <h1>Date: {moment().format('DD-MM-YYYY')}</h1>
      </div>
      <br />
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
              <p>{reportData?.data?.pdDetails?.reporterName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Contact No:</p>
            </td>
            <td>
              <p>{reportData?.data?.pdDetails?.reporterContact}</p>
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
              <p>{reportData?.data?.pdDetails?.reviewerName}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Contact No:</p>
            </td>
            <td>
              <p>{reportData?.data?.pdDetails?.reviewerContact}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {reportData?.data?.photos?.photos.map((obj: any, i: number) => (
          <img key={i} src={obj} alt={i.toString()} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default ReportData;
