import { HambergerMenu } from "iconsax-react";

const ConnectHubSpot = () => {
  return(
    <div className="bg-lightOrange/5 mt-10 p-4 border-veryLightGray border-[1px] flex gap-x-5 rounded-2xl">
          <div className="bg-lightOrange w-10 h-10 rounded-full flex justify-center items-center flex-shrink-0 flex-grow-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3672 14.4117C12.8738 14.4117 11.6625 13.2137 11.6625 11.7356C11.6625 10.2574 12.8735 9.05899 14.3672 9.05899C15.861 9.05899 17.0727 10.257 17.0727 11.7356C17.0727 13.2141 15.8617 14.4117 14.3672 14.4117ZM15.1774 6.58282V4.20001C15.4942 4.05492 15.7629 3.82237 15.9521 3.52972C16.1412 3.23707 16.2428 2.89649 16.2449 2.54806V2.49298C16.2449 1.48595 15.4121 0.662508 14.3953 0.662508H14.3395C13.3238 0.662508 12.4899 1.48634 12.4899 2.49298V2.54806C12.4921 2.89647 12.5937 3.23701 12.7829 3.52964C12.972 3.82228 13.2407 4.05484 13.5574 4.20001V6.58282C12.6453 6.72041 11.7852 7.0947 11.0629 7.66837L4.45743 2.5836C4.50367 2.41632 4.52848 2.24385 4.53126 2.07032C4.53126 0.929305 3.59806 0.0031329 2.44533 7.89814e-06C1.29259 -0.0031171 0.357435 0.921492 0.356263 2.0629C0.355091 3.2043 1.2879 4.12852 2.44064 4.13048C2.80169 4.12892 3.15614 4.03348 3.46915 3.85352L9.96837 8.85743C9.38369 9.72834 9.07823 10.7567 9.09267 11.8056C9.10712 12.8545 9.44079 13.874 10.0492 14.7285L8.07189 16.6856C7.83795 16.6122 7.59089 16.5905 7.34773 16.6218C7.10458 16.6532 6.87111 16.7369 6.66342 16.8671C6.45572 16.9974 6.27873 17.1711 6.14464 17.3764C6.01056 17.5816 5.92256 17.8135 5.88672 18.056C5.85087 18.2986 5.86803 18.546 5.93702 18.7812C6.006 19.0165 6.12517 19.234 6.28631 19.4188C6.44744 19.6036 6.64672 19.7512 6.87041 19.8515C7.09411 19.9519 7.33689 20.0025 7.58205 20C8.52892 20 9.29689 19.2399 9.29689 18.3027C9.29521 18.138 9.26888 17.9745 9.21876 17.8176L11.1719 15.8832C12.0913 16.5801 13.2135 16.957 14.3672 16.9563C17.2817 16.9563 19.643 14.6191 19.643 11.7356C19.643 9.1254 17.7047 6.96993 15.177 6.58282"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="text-base font-medium text-black2 mb-2">
              Sync With Hubspot CRM
            </div>
            <div className="text-gray2 text-sm mb-2">
              Please select the screenplay file you wish to upload for analysis.
              Once uploaded, our AI will begin the comprehensive analysis
              process, which may take up to 5 hours to complete.
            </div>
            <button className="text-blue2 font-bold text-sm">
              Connect Hubspot
            </button>
            <HambergerMenu
              size="20"
              color="#010025"
              className="absolute top-0 right-2"
            />
          </div>
        </div>
  )
}

export default ConnectHubSpot