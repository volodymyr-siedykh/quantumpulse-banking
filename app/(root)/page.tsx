import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {
    firstName: 'Volodymyr',
    lastName: 'Siedykh',
    email: 'volodymyr@siedykh',
    userId: '1',
    dwollaCustomerUrl: 'url',
    dwollaCustomerId: 'id',
    address1: 'address',
    city: 'city',
    state: 'state',
    postalCode: 'postal',
    dateOfBirth: 'dob',
    ssn: 'ssn',
    $id: 'id',
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account, settings, and transaction effortlessly.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1233.55}
          />
        </header>
        recent transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance : 1233.55},{ currentBalance: 4500.56} ]}
      />
    </section>
  );
};

export default Home;
