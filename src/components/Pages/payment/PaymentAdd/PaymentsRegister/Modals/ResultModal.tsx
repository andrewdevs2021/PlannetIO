import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

type ResultModalProps = {
  mode: string;
  setResultModalShow: Function;
};
export default function ResultModal({
  mode,
  setResultModalShow,
}: ResultModalProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setResultModalShow(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center rounded-[8px] bg-[#FFFFFFE5] h-fit gap-[10px] px-[44px] py-[30px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[275px] text-[#1F133E] text-[20px] text-center font-[700] z-[100] cursor-pointer"
      onClick={() => setResultModalShow(false)}
    >
      {mode === 'delete' ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M24.1919 32.4801H10.5344C10.1177 32.43 9.73373 32.2289 9.45519 31.9149C9.17665 31.6009 9.02284 31.1957 9.02284 30.776C9.02284 30.3562 9.17665 29.951 9.45519 29.637C9.73373 29.323 10.1177 29.1219 10.5344 29.0718H24.2164C24.4574 29.0429 24.7017 29.0653 24.9333 29.1378C25.165 29.2102 25.3786 29.3309 25.5601 29.4919C25.7417 29.653 25.887 29.8507 25.9866 30.072C26.0861 30.2933 26.1376 30.5333 26.1376 30.776C26.1376 31.0186 26.0861 31.2586 25.9866 31.4799C25.887 31.7012 25.7417 31.8989 25.5601 32.06C25.3786 32.221 25.165 32.3417 24.9333 32.4142C24.7017 32.4866 24.4574 32.509 24.2164 32.4801H24.1919ZM19.0673 37.6292C19.0673 37.174 18.8864 36.7375 18.5646 36.4156C18.2427 36.0937 17.8061 35.9129 17.3509 35.9129H10.5344C10.2935 35.8839 10.0491 35.9064 9.81751 35.9788C9.58588 36.0512 9.37225 36.1719 9.1907 36.333C9.00914 36.494 8.86381 36.6917 8.76428 36.913C8.66474 37.1344 8.61328 37.3743 8.61328 37.617C8.61328 37.8597 8.66474 38.0996 8.76428 38.3209C8.86381 38.5423 9.00914 38.74 9.1907 38.901C9.37225 39.0621 9.58588 39.1828 9.81751 39.2552C10.0491 39.3276 10.2935 39.3501 10.5344 39.3211H17.2773C17.5068 39.331 17.7359 39.2947 17.9511 39.2144C18.1663 39.1341 18.3631 39.0114 18.5301 38.8537C18.697 38.6959 18.8305 38.5062 18.9228 38.2959C19.0151 38.0856 19.0642 37.8589 19.0673 37.6292Z"
              fill="#1F133E"
              stroke="#1F133E"
              strokeWidth="0.5"
            />
            <path
              d="M45.5714 11H9.67465C7.6412 11.0065 5.69287 11.8171 4.255 13.255C2.81712 14.6929 2.00647 16.6412 2 18.6747V40.9142C1.99999 42.9519 2.80778 44.9065 4.24636 46.3497C5.68494 47.7929 7.63696 48.6069 9.67465 48.6134H34.9789C35.2199 48.6423 35.4642 48.6199 35.6959 48.5475C35.9275 48.475 36.1411 48.3543 36.3227 48.1933C36.5042 48.0323 36.6496 47.8345 36.7491 47.6132C36.8486 47.3919 36.9001 47.1519 36.9001 46.9093C36.9001 46.6666 36.8486 46.4267 36.7491 46.2053C36.6496 45.984 36.5042 45.7863 36.3227 45.6252C36.1411 45.4642 35.9275 45.3435 35.6959 45.2711C35.4642 45.1987 35.2199 45.1762 34.9789 45.2051H9.67465C8.54313 45.2051 7.45795 44.7556 6.65784 43.9555C5.85773 43.1554 5.40823 42.0702 5.40823 40.9387V24.6821H49.8379V26.8398C49.8089 27.0807 49.8314 27.3251 49.9038 27.5567C49.9762 27.7884 50.0969 28.002 50.258 28.1835C50.419 28.3651 50.6167 28.5104 50.838 28.61C51.0594 28.7095 51.2993 28.761 51.542 28.761C51.7847 28.761 52.0246 28.7095 52.2459 28.61C52.4672 28.5104 52.665 28.3651 52.826 28.1835C52.987 28.002 53.1077 27.7884 53.1802 27.5567C53.2526 27.3251 53.275 27.0807 53.2461 26.8398V18.6992C53.2461 16.6615 52.4383 14.7069 50.9997 13.2637C49.5611 11.8205 47.6091 11.0065 45.5714 11ZM5.40823 21.2493V18.7973C5.39516 18.2288 5.49586 17.6635 5.70441 17.1345C5.91295 16.6055 6.22514 16.1235 6.62263 15.7169C7.02011 15.3102 7.49486 14.9872 8.01899 14.7667C8.54311 14.5461 9.10603 14.4326 9.67465 14.4328H45.5714C46.703 14.4328 47.7881 14.8823 48.5883 15.6824C49.3884 16.4825 49.8379 17.5677 49.8379 18.6992V21.1512L5.40823 21.2493Z"
              fill="#1F133E"
              stroke="#1F133E"
              strokeWidth="0.5"
            />
            <path
              d="M54.3033 40.912L52.8321 42.3831L54.3033 43.8543C54.4643 44.0153 54.592 44.2065 54.6792 44.4168C54.7663 44.6272 54.8111 44.8526 54.8111 45.0803C54.8111 45.308 54.7663 45.5335 54.6792 45.7438C54.592 45.9542 54.4643 46.1453 54.3033 46.3063C54.1423 46.4673 53.9512 46.595 53.7408 46.6822C53.5305 46.7693 53.305 46.8141 53.0773 46.8141C52.8497 46.8141 52.6242 46.7693 52.4138 46.6822C52.2035 46.595 52.0124 46.4673 51.8514 46.3063L50.3802 44.8351L48.909 46.3063C48.5838 46.6315 48.1429 46.8141 47.683 46.8141C47.2232 46.8141 46.7822 46.6315 46.457 46.3063C46.1319 45.9812 45.9492 45.5402 45.9492 45.0803C45.9492 44.6205 46.1319 44.1795 46.457 43.8543L47.9282 42.3831L46.457 40.912C46.1319 40.5868 45.9492 40.1458 45.9492 39.686C45.9492 39.2261 46.1319 38.7851 46.457 38.46C46.7822 38.1348 47.2232 37.9521 47.683 37.9521C48.1429 37.9521 48.5838 38.1348 48.909 38.46L50.3802 39.9312L51.8514 38.46C52.0124 38.299 52.2035 38.1713 52.4138 38.0841C52.6242 37.997 52.8497 37.9521 53.0773 37.9521C53.305 37.9521 53.5305 37.997 53.7408 38.0841C53.9512 38.1713 54.1423 38.299 54.3033 38.46C54.4643 38.621 54.592 38.8121 54.6792 39.0225C54.7663 39.2328 54.8111 39.4583 54.8111 39.686C54.8111 39.9137 54.7663 40.1391 54.6792 40.3495C54.592 40.5598 54.4643 40.751 54.3033 40.912Z"
              fill="#1F133E"
              stroke="#1F133E"
              strokeWidth="0.5"
            />
            <path
              d="M50.402 30.7861C48.111 30.791 45.8729 31.4758 43.9714 32.7537C42.0699 34.0317 40.5904 35.8452 39.7204 37.9647C38.8504 40.0841 38.6291 42.4141 39.0844 44.6595C39.5397 46.9049 40.6512 48.9646 42.2781 50.5777C43.905 52.1909 45.974 53.2848 48.2232 53.7211C50.4723 54.1573 52.8003 53.9162 54.9123 53.0282C57.0243 52.1403 58.8252 50.6454 60.0869 48.7331C61.3487 46.8207 62.0144 44.5769 61.9998 42.2859C61.974 39.227 60.7407 36.3022 58.5684 34.1483C56.3962 31.9945 53.4611 30.786 50.402 30.7861ZM50.402 50.5246C48.7903 50.5245 47.2146 50.0474 45.8735 49.1535C44.5324 48.2595 43.4859 46.9886 42.8658 45.5009C42.2457 44.0132 42.0798 42.3752 42.3889 40.7934C42.6981 39.2116 43.4684 37.7566 44.603 36.6118C45.7375 35.4671 47.1855 34.6837 48.7645 34.3603C50.3435 34.037 51.9829 34.1883 53.476 34.795C54.9692 35.4017 56.2495 36.4368 57.1554 37.7699C58.0614 39.1029 58.5526 40.6742 58.5671 42.2859C58.5768 43.3644 58.3728 44.434 57.9668 45.4332C57.5608 46.4323 56.9609 47.3411 56.2018 48.1071C55.4426 48.8731 54.5392 49.4812 53.5438 49.8961C52.5483 50.311 51.4805 50.5246 50.402 50.5246Z"
              fill="#1F133E"
              stroke="#1F133E"
              strokeWidth="0.5"
            />
          </svg>
          <p>Card Deleted</p>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M24 34L30 40L40 26M56 32C56 35.1517 55.3792 38.2726 54.1731 41.1844C52.967 44.0962 51.1992 46.742 48.9706 48.9706C46.742 51.1992 44.0962 52.967 41.1844 54.1731C38.2726 55.3792 35.1517 56 32 56C28.8483 56 25.7274 55.3792 22.8156 54.1731C19.9038 52.967 17.258 51.1992 15.0294 48.9706C12.8008 46.742 11.033 44.0962 9.82689 41.1844C8.62078 38.2726 8 35.1517 8 32C8 25.6348 10.5286 19.5303 15.0294 15.0294C19.5303 10.5286 25.6348 8 32 8C38.3652 8 44.4697 10.5286 48.9706 15.0294C53.4714 19.5303 56 25.6348 56 32Z"
              stroke="#1F133E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Has been set as your primary card</p>
        </>
      )}
    </div>
  );
}
