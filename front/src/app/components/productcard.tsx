import { FC } from 'react';
import Link from 'next/link';
import { Product } from '../types/product';

interface Props {
  product: Product | undefined;
}

const CardSell: FC<Props> = ({ product }) => {
  if (!product) return <div>Produto não disponível</div>;

  return (
    <div className='border-2 border-gray-200 rounded-xl w-[190px] h-[400px] max-w-[190px] hover:scale-105 hover:shadow-2xl duration-300 text-center text-black bg-white'>
      <Link href={`/dp-products?id=${product.id}`} passHref>
        <div className='h-[170px] flex justify-center'>
          <img className='h-[160px]' src={product.thumbnail} alt={product.title} />
        </div>
        <div className='h-[90px]'>
          <h2 className='font-light mx-2'>{product.title}</h2>
        </div>

        <div className='text-center flex items-center flex-col'>
          <svg className='star my-4' height="15" width="64" fill="none" viewBox="0 0 64 11" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_126_37)">
              <path d="M10.7684 4.07015C10.6878 3.83026 10.4802 3.65536 10.2302 3.61713L7.32052 3.17251L6.01358 0.388376C5.90213 0.151064 5.66396 0 5.4023 0C5.14047 0 4.90247 0.151064 4.79101 0.388376L3.48391 3.17268L0.574262 3.6173C0.324261 3.65554 0.116613 3.83026 0.0361939 4.07032C-0.0442248 4.31037 0.016475 4.57478 0.193259 4.75619L2.3181 6.93504L1.81484 10.0175C1.77334 10.2727 1.88154 10.5292 2.09261 10.6784C2.30352 10.8275 2.58199 10.8426 2.80884 10.7175L5.40247 9.28313L7.9961 10.7175C8.09847 10.774 8.21112 10.8018 8.32326 10.8018C8.45975 10.8018 8.59624 10.7603 8.71232 10.6784C8.9234 10.5294 9.03143 10.2728 8.98993 10.0175L8.48667 6.93504L10.6117 4.75619C10.7881 4.57478 10.8488 4.31037 10.7684 4.07015Z" fill="#E1CB00" />
            </g>
            <g clipPath="url(#clip1_126_37)">
              <path d="M23.8 4.07015C23.7194 3.83026 23.5118 3.65536 23.2618 3.61713L20.3521 3.17251L19.0452 0.388376C18.9337 0.151064 18.6956 0 18.4339 0C18.1721 0 17.9341 0.151064 17.8226 0.388376L16.5155 3.17268L13.6059 3.6173C13.3559 3.65554 13.1482 3.83026 13.0678 4.07032C12.9874 4.31037 13.0481 4.57478 13.2249 4.75619L15.3497 6.93504L14.8465 10.0175C14.805 10.2727 14.9132 10.5292 15.1242 10.6784C15.3351 10.8275 15.6136 10.8426 15.8405 10.7175L18.4341 9.28313L21.0277 10.7175C21.1301 10.774 21.2427 10.8018 21.3549 10.8018C21.4914 10.8018 21.6279 10.7603 21.7439 10.6784C21.955 10.5294 22.063 10.2728 22.0215 10.0175L21.5183 6.93504L23.6433 4.75619C23.8197 4.57478 23.8804 4.31037 23.8 4.07015Z" fill="#E1CB00" />
            </g>
            <g clipPath="url(#clip2_126_37)">
              <path d="M36.8316 4.07015C36.751 3.83026 36.5434 3.65536 36.2934 3.61713L33.3837 3.17251L32.0768 0.388376C31.9654 0.151064 31.7272 0 31.4655 0C31.2037 0 30.9657 0.151064 30.8542 0.388376L29.5471 3.17268L26.6375 3.6173C26.3875 3.65554 26.1798 3.83026 26.0994 4.07032C26.019 4.31037 26.0797 4.57478 26.2565 4.75619L28.3813 6.93504L27.8781 10.0175C27.8366 10.2727 27.9448 10.5292 28.1558 10.6784C28.3668 10.8275 28.6452 10.8426 28.8721 10.7175L31.4657 9.28313L34.0593 10.7175C34.1617 10.774 34.2744 10.8018 34.3865 10.8018C34.523 10.8018 34.6595 10.7603 34.7756 10.6784C34.9866 10.5294 35.0947 10.2728 35.0532 10.0175L34.5499 6.93504L36.6749 4.75619C36.8514 4.57478 36.9121 4.31037 36.8316 4.07015Z" fill="#E1CB00" />
            </g>
            <g clipPath="url(#clip3_126_37)">
              <path d="M49.8633 4.07015C49.7827 3.83026 49.575 3.65536 49.325 3.61713L46.4154 3.17251L45.1084 0.388376C44.997 0.151064 44.7588 0 44.4971 0C44.2353 0 43.9973 0.151064 43.8859 0.388376L42.5788 3.17268L39.6691 3.6173C39.4191 3.65554 39.2115 3.83026 39.131 4.07032C39.0506 4.31037 39.1113 4.57478 39.2881 4.75619L41.4129 6.93504L40.9097 10.0175C40.8682 10.2727 40.9764 10.5292 41.1875 10.6784C41.3984 10.8275 41.6768 10.8426 41.9037 10.7175L44.4973 9.28313L47.0909 10.7175C47.1933 10.774 47.306 10.8018 47.4181 10.8018C47.5546 10.8018 47.6911 10.7603 47.8072 10.6784C48.0183 10.5294 48.1263 10.2728 48.0848 10.0175L47.5815 6.93504L49.7065 4.75619C49.883 4.57478 49.9437 4.31037 49.8633 4.07015Z" fill="#E1CB00" />
            </g>
            <g clipPath="url(#clip4_126_37)">
              <path d="M62.8947 4.07015C62.8142 3.83026 62.6065 3.65536 62.3565 3.61713L59.4469 3.17251L58.1399 0.388376C58.0285 0.151064 57.7903 0 57.5286 0C57.2668 0 57.0288 0.151064 56.9174 0.388376L55.6103 3.17268L52.7006 3.6173C52.4506 3.65554 52.243 3.83026 52.1625 4.07032C52.0821 4.31037 52.1428 4.57478 52.3196 4.75619L54.4444 6.93504L53.9412 10.0175C53.8997 10.2727 54.0079 10.5292 54.219 10.6784C54.4299 10.8275 54.7083 10.8426 54.9352 10.7175L57.5288 9.28313L60.1224 10.7175C60.2248 10.774 60.3375 10.8018 60.4496 10.8018C60.5861 10.8018 60.7226 10.7603 60.8387 10.6784C61.0497 10.5294 61.1578 10.2728 61.1163 10.0175L60.613 6.93504L62.738 4.75619C62.9145 4.57478 62.9752 4.31037 62.8947 4.07015Z" fill="#E1CB00" />
            </g>
            <defs>
              <clipPath id="clip0_126_37">
                <rect height="10.974" width="10.974" fill="white" />
              </clipPath>
              <clipPath id="clip1_126_37">
                <rect height="10.974" width="10.974" fill="white" transform="translate(13.0316)" />
              </clipPath>
              <clipPath id="clip2_126_37">
                <rect height="10.974" width="10.974" fill="white" transform="translate(26.0632)" />
              </clipPath>
              <clipPath id="clip3_126_37">
                <rect height="10.974" width="10.974" fill="white" transform="translate(39.0948)" />
              </clipPath>
              <clipPath id="clip4_126_37">
                <rect height="10.974" width="10.974" fill="white" transform="translate(52.1263)" />
              </clipPath>
            </defs>
          </svg>
          <svg height="19" width="69" fill="none" viewBox="0 0 69 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6964 13.7693C36.3723 13.7701 36.0513 13.7021 35.7519 13.5693C35.4524 13.4364 35.1805 13.2414 34.9518 12.9953L32.432 10.2953C32.3428 10.2045 32.2244 10.1539 32.1014 10.1539C31.9784 10.1539 31.86 10.2045 31.7708 10.2953L29.2414 13.0056C29.0128 13.2518 28.7409 13.4469 28.4414 13.5798C28.1419 13.7126 27.8209 13.7805 27.4968 13.7796H27L30.1917 17.1996C31.1877 18.2668 32.8039 18.2668 33.7999 17.1996L37 13.7693H36.6964ZM27.4968 4.21904C28.1567 4.21904 28.7759 4.49418 29.2414 4.99304L31.7708 7.70333C31.8143 7.74998 31.8659 7.78699 31.9227 7.81224C31.9796 7.83749 32.0405 7.85049 32.102 7.85049C32.1635 7.85049 32.2244 7.83749 32.2813 7.81224C32.3381 7.78699 32.3897 7.74998 32.4332 7.70333L34.953 5.00333C35.1815 4.75734 35.4532 4.5623 35.7524 4.42945C36.0517 4.2966 36.3725 4.22859 36.6964 4.22933H37L33.7999 0.800318C33.3213 0.287864 32.6724 0 31.9958 0C31.3192 0 30.6703 0.287864 30.1917 0.800318L27 4.22032L27.4968 4.21904Z" fill="black" />
            <path d="M40.1996 7.07398L38.1269 5.00897C38.0803 5.028 38.0306 5.038 37.9803 5.03843H37.0378C36.5505 5.03843 36.0734 5.23571 35.7301 5.57902L33.0299 8.26918C32.9098 8.38944 32.7671 8.48487 32.6099 8.55C32.4527 8.61512 32.2841 8.64864 32.1138 8.64864C31.9435 8.64864 31.7749 8.61512 31.6177 8.55C31.4605 8.48487 31.3177 8.38944 31.1977 8.26918L28.4872 5.56749C28.1394 5.22246 27.669 5.02818 27.1782 5.0269H26.021C25.973 5.02652 25.9255 5.0174 25.8808 5L23.8004 7.07398C22.7332 8.13723 22.7332 9.86277 23.8004 10.9273L25.8808 13C25.925 12.9823 25.9721 12.9727 26.0197 12.9718H27.1782C27.6668 12.9718 28.1426 12.7758 28.4872 12.4325L31.1964 9.73082C31.4436 9.49634 31.7718 9.36555 32.1132 9.36555C32.4545 9.36555 32.7827 9.49634 33.0299 9.73082L35.7301 12.421C36.0734 12.7643 36.5505 12.9603 37.0378 12.9603H37.9803C38.0317 12.9603 38.0819 12.9731 38.1269 12.991L40.1996 10.926C41.2668 9.86277 41.2668 8.13723 40.1996 7.07398Z" fill="black" />
            <path d="M1.00489 15.086C0.959966 10.2029 1.12176 5.31879 0.926938 0.438051C0.904284 -0.129397 -0.0224493 -0.0976811 0.000416232 0.469978C0.195451 5.35072 0.0334019 10.2349 0.0783709 15.1178C0.0834098 15.6861 1.00997 15.6532 1.00489 15.086Z" fill="black" />
            <path d="M5.79413 0.429705C5.77143 -0.137742 4.8447 -0.106239 4.86761 0.461632C5.06272 5.34237 4.90038 10.2268 4.94556 15.1094C4.95081 15.678 5.87733 15.6449 5.87229 15.0776C5.82711 10.1949 5.98895 5.31045 5.79413 0.429705Z" fill="black" />
            <path d="M9.58082 15.0712C9.53585 10.1883 9.69778 5.30399 9.50274 0.423246C9.48017 -0.144074 8.55344 -0.112359 8.57635 0.455173C8.77147 5.33591 8.60925 10.2203 8.6543 15.1032C8.65947 15.6713 9.58599 15.6384 9.58082 15.0712Z" fill="black" />
            <path d="M7.69255 15.083C7.61235 10.2014 7.67997 5.32034 7.49281 0.439388C7.47109 -0.12806 6.81002 -0.105575 6.83183 0.462084C7.01899 5.34304 6.95136 10.2242 7.03156 15.1058C7.04079 15.6741 7.70178 15.65 7.69255 15.083Z" fill="black" />
            <path d="M17.1513 0.410127C17.1287 -0.15732 16.202 -0.125816 16.2248 0.441927C16.4198 5.32267 16.2577 10.2072 16.3029 15.0899C16.308 15.6584 17.2345 15.6251 17.2296 15.0581C17.1844 10.1751 17.3461 5.29087 17.1513 0.410127Z" fill="black" />
            <path d="M14.4807 0.448978C14.6678 5.32993 14.6003 10.211 14.6805 15.0926C14.6898 15.6609 15.3507 15.637 15.3415 15.07C15.2612 10.1884 15.329 5.30723 15.1417 0.426282C15.12 -0.141165 14.459 -0.118893 14.4807 0.448978Z" fill="black" />
            <path d="M4.01795 15.0808C3.97298 10.1979 4.13503 5.31362 3.93999 0.432879C3.91708 -0.134441 1.8317 -0.10082 1.85418 0.466839C2.0493 5.34758 1.88717 10.2321 1.93214 15.1147C1.93786 15.6831 4.02345 15.6478 4.01795 15.0808Z" fill="black" />
            <path d="M13.5208 15.0643C13.476 10.1814 13.6377 5.29718 13.4429 0.416437C13.4201 -0.150968 10.4077 -0.115738 10.4303 0.451921C10.6253 5.33266 10.4632 10.2168 10.5082 15.0997C10.5135 15.6683 13.5262 15.6315 13.5208 15.0643Z" fill="black" />
            <path d="M1.28999 16.1247C0.59818 15.7533 -0.315554 18.1856 1.29482 18.054C1.73722 18.0179 1.95364 17.7225 1.98493 17.3582C1.99023 17.2959 1.99023 17.2311 1.98493 17.1653C1.94462 16.6732 1.73104 16.3616 1.28999 16.1247ZM1.27132 17.3877C1.26378 17.3957 1.25573 17.4034 1.24756 17.4109C1.24693 17.4109 1.24672 17.4112 1.24672 17.4112C1.25285 17.4013 1.23812 17.4066 1.22995 17.4114C1.22491 17.4101 1.22008 17.4088 1.21144 17.4069C1.16122 17.3959 1.13878 17.3849 1.10351 17.3658C1.02136 17.1684 1.05579 16.9966 1.16393 16.842C1.26361 16.988 1.30477 17.1538 1.29693 17.3426C1.28474 17.361 1.26958 17.3862 1.27132 17.3877Z" fill="black" />
            <path d="M4.28456 16.1247C3.59296 15.7533 2.67901 18.1856 4.28938 18.054C4.7317 18.0179 4.94842 17.7225 4.97963 17.3582C4.985 17.2959 4.98467 17.2311 4.97942 17.1653C4.93919 16.6732 4.72578 16.3616 4.28456 16.1247ZM4.26584 17.3877C4.25809 17.3957 4.24992 17.4034 4.24204 17.4109C4.24111 17.4109 4.24086 17.4112 4.24086 17.4112C4.24729 17.4013 4.2326 17.4066 4.22422 17.4114C4.21914 17.4101 4.21431 17.4088 4.20571 17.4069C4.15549 17.3959 4.13305 17.3849 4.09778 17.3658C4.01567 17.1684 4.05006 16.9966 4.15812 16.842C4.25788 16.988 4.29904 17.1538 4.29133 17.3426C4.27931 17.361 4.26381 17.3862 4.26584 17.3877Z" fill="black" />
            <path d="M7.27909 16.1247C6.58728 15.7533 5.67334 18.1856 7.28392 18.054C7.72599 18.0179 7.94266 17.7225 7.97391 17.3582C7.9792 17.2959 7.9792 17.2311 7.97391 17.1653C7.93343 16.6732 7.7201 16.3616 7.27909 16.1247ZM7.26021 17.3877C7.25246 17.3957 7.2445 17.4034 7.23637 17.4109C7.23573 17.4109 7.23548 17.4112 7.23548 17.4112C7.24171 17.4013 7.22689 17.4066 7.21863 17.4114C7.21346 17.4101 7.20863 17.4088 7.20004 17.4069C7.14995 17.3959 7.12772 17.3849 7.09223 17.3658C7.01009 17.1684 7.04472 16.9966 7.15274 16.842C7.25229 16.988 7.2937 17.1538 7.28574 17.3426C7.27363 17.361 7.25813 17.3862 7.26021 17.3877Z" fill="black" />
            <path d="M10.2731 16.1247C9.58143 15.7533 8.66749 18.1856 10.2781 18.054C10.7204 18.0179 10.9369 17.7225 10.9681 17.3582C10.9734 17.2959 10.9734 17.2311 10.9681 17.1653C10.9279 16.6732 10.7144 16.3616 10.2731 16.1247ZM10.2542 17.3877C10.2469 17.3957 10.2387 17.4034 10.2306 17.4109C10.2299 17.4109 10.2297 17.4112 10.2297 17.4112C10.2357 17.4013 10.2211 17.4066 10.2129 17.4114C10.2075 17.4101 10.203 17.4088 10.1944 17.4069C10.1441 17.3959 10.1217 17.3849 10.0864 17.3658C10.0043 17.1684 10.0387 16.9966 10.1468 16.842C10.2466 16.988 10.2877 17.1538 10.2798 17.3426C10.268 17.361 10.2527 17.3862 10.2542 17.3877Z" fill="black" />
            <path d="M13.2678 16.1247C12.5761 15.7533 11.6622 18.1856 13.2725 18.054C13.715 18.0179 13.9315 17.7225 13.9629 17.3582C13.9681 17.2959 13.9679 17.2311 13.9627 17.1653C13.9223 16.6732 13.709 16.3616 13.2678 16.1247ZM13.2489 17.3877C13.2413 17.3957 13.2332 17.4034 13.2252 17.4109C13.2243 17.4109 13.2241 17.4112 13.2241 17.4112C13.2306 17.4013 13.2158 17.4066 13.2074 17.4114C13.2025 17.4101 13.1975 17.4088 13.1889 17.4069C13.1388 17.3959 13.1162 17.3849 13.0811 17.3658C12.999 17.1684 13.0332 16.9966 13.1414 16.842C13.2411 16.988 13.2822 17.1538 13.2747 17.3426C13.2622 17.361 13.2471 17.3862 13.2489 17.3877Z" fill="black" />
            <path d="M16.2622 16.1247C15.5705 15.7533 14.6564 18.1856 16.2671 18.054C16.7092 18.0179 16.926 17.7225 16.9572 17.3582C16.9625 17.2959 16.9625 17.2311 16.957 17.1653C16.9167 16.6732 16.7032 16.3616 16.2622 16.1247ZM16.2435 17.3877C16.2358 17.3957 16.2281 17.4034 16.2198 17.4109C16.2192 17.4109 16.219 17.4112 16.219 17.4112C16.225 17.4013 16.2104 17.4066 16.202 17.4114C16.1968 17.4101 16.1921 17.4088 16.1835 17.4069C16.1332 17.3959 16.111 17.3849 16.0755 17.3658C15.9934 17.1684 16.028 16.9966 16.1362 16.842C16.2355 16.988 16.277 17.1538 16.2691 17.3426C16.2571 17.361 16.2416 17.3862 16.2435 17.3877Z" fill="black" />
            <path d="M56.8249 12.1562H53.4124" stroke="#1F1F1F" strokeLinecap="round" strokeWidth="2" />
            <path d="M55.1186 9.71875H53.4124" stroke="#1F1F1F" strokeLinecap="round" strokeWidth="2" />
            <path d="M60.2373 10.9375C60.2373 10.1715 60.2373 9.78846 60.4872 9.55048C60.7371 9.3125 61.1392 9.3125 61.9436 9.3125C62.7479 9.3125 63.15 9.3125 63.3999 9.55048C63.6498 9.78846 63.6498 10.1715 63.6498 10.9375C63.6498 11.7035 63.6498 12.0865 63.3999 12.3245C63.15 12.5625 62.7479 12.5625 61.9436 12.5625C61.1392 12.5625 60.7371 12.5625 60.4872 12.3245C60.2373 12.0865 60.2373 11.7035 60.2373 10.9375Z" stroke="#1F1F1F" strokeWidth="2" />
            <path d="M67.0625 8.5C67.0625 5.43587 67.0625 3.90381 66.063 2.9519C65.0635 2 63.4548 2 60.2375 2H56.825C53.6077 2 51.999 2 50.9995 2.9519C50 3.90381 50 5.43587 50 8.5C50 11.5641 50 13.0962 50.9995 14.0481C51.999 15 53.6077 15 56.825 15H60.2375C63.4548 15 65.0635 15 66.063 14.0481C66.6202 13.5173 66.8668 12.8063 66.9759 11.75" stroke="#1F1F1F" strokeLinecap="round" strokeWidth="2" />
            <path d="M50 6.875H54.2656M67.0625 6.875H57.6781" stroke="#1F1F1F" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <p className='my-2 font-semibold mt-4 text-lg'>R$ {product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardSell;
