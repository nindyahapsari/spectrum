import { Table } from 'react-daisyui';
import firstIcon from '../../assets/airline-icon-first.png';
import secondIcon from '../../assets/airline-icon-second.png';

const TABLE_HEAD = ['', 'Transaction', 'Amount', 'Date', 'Status', 'Account'];

const TABLE_ROWS = [
  {
    img: firstIcon,
    name: 'Air1234',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: secondIcon,
    name: 'Lufthansa',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    accountNumber: '1234',
    expiry: '06/2026',
  },
];

function TransactionsTable() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block  py-2 align-middle">
        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
          <Table className="min-w-full divide-y divide-gray-200">
            <Table.Head className="bg-gray-50 py-10">
              {TABLE_HEAD.map((head, index) => (
                <span
                  key={`${head}${index}`}
                  className="px-3 py-10 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {head}
                </span>
              ))}
            </Table.Head>
            <Table.Body className="bg-white divide-y divide-gray-200">
              {TABLE_ROWS.map((row, index) => (
                <Table.Row key={`${row.name}${index}`}>
                  <span className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </span>
                  <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.name}
                  </span>
                  <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.amount}
                  </span>
                  <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.date}
                  </span>
                  <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.status}
                  </span>
                  <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.account}
                  </span>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTable;
