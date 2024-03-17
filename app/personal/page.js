import CheckAuthUser from "@/components/checkAuthUser"
import GetUserInfo from "./getUserInfo"
import UserInfo from "./userInfo"

export const metadata = {
  title: 'Личный кабинет',
  description: 'Личный кабинет',
}

export default function Page() {
    return (
        <main className="container m-auto">
            <CheckAuthUser />

            <GetUserInfo />

            <article className='link_path mobile_none pt-[13vh]'>
                <a href='/' className='text-[#000] opacity-70'>Главная / </a><span>Личный кабинет</span>
            </article>
                
            <section className='userpage_info mobile_none pt-[60px]'>
                <div className='info_left bg-[#f4f4f4] rounded flex justify-center items-center w-[30%]'>
                    <svg width="237" height="295" viewBox="0 0 237 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M204.706 85.9875C204.706 131.82 166.003 168.975 118.26 168.975C70.518 168.975 31.8151 131.82 31.8151 85.9875C31.8151 40.1548 70.518 3 118.26 3C166.003 3 204.706 40.1548 204.706 85.9875Z" fill="#DFDFDF"/>
                        <path d="M118.26 168.975C166.003 168.975 204.706 131.82 204.706 85.9875C204.706 40.1548 166.003 3 118.26 3C70.518 3 31.8151 40.1548 31.8151 85.9875C31.8151 131.82 70.518 168.975 118.26 168.975ZM118.26 168.975C3 168.975 3 218.515 3 279.625M118.26 168.975C233.521 171.38 233.521 218.515 233.521 279.625" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round"/>
                        <path d="M1 257.154L7.5 229.5L9 223.5L11.5 217.5L15.5 207.5L24.5 190.923L71.5 172L111 170.5L149.833 172L189 181.462L209.5 192.5L221 209L227 222L236 257.154V295H1V257.154Z" fill="#DFDFDF"/>
                    </svg>
                </div>
            
                <UserInfo />
            </section>
            
            <article className='link_path mobile_block_link pt-[130px] flex flex-row justify-between w-[95%]'>
                <div>
                    <a href='/' className='text-[#000] opacity-70'>Главная / </a><span>Личный кабинет</span>
                </div>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
            </article>

            <section className='mobile_block pt-[30px] flex flex-col'>
                <div className='info_left bg-[#f4f4f4] rounded flex justify-center items-center w-[100%]'>
                    <svg width="237" height="295" viewBox="0 0 237 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M204.706 85.9875C204.706 131.82 166.003 168.975 118.26 168.975C70.518 168.975 31.8151 131.82 31.8151 85.9875C31.8151 40.1548 70.518 3 118.26 3C166.003 3 204.706 40.1548 204.706 85.9875Z" fill="#DFDFDF"/>
                        <path d="M118.26 168.975C166.003 168.975 204.706 131.82 204.706 85.9875C204.706 40.1548 166.003 3 118.26 3C70.518 3 31.8151 40.1548 31.8151 85.9875C31.8151 131.82 70.518 168.975 118.26 168.975ZM118.26 168.975C3 168.975 3 218.515 3 279.625M118.26 168.975C233.521 171.38 233.521 218.515 233.521 279.625" stroke="#DFDFDF" stroke-width="5" stroke-linecap="round"/>
                        <path d="M1 257.154L7.5 229.5L9 223.5L11.5 217.5L15.5 207.5L24.5 190.923L71.5 172L111 170.5L149.833 172L189 181.462L209.5 192.5L221 209L227 222L236 257.154V295H1V257.154Z" fill="#DFDFDF"/>
                    </svg>
                </div>
            
                <UserInfo />
            </section>

            <section className='userpage_blocks mobile_none pb-[60px]'>
            
                <a className='blocks_block w-[25%] bg-[#f4f4f4]' href='#'>
                    <div>
                    <h2>Доставки</h2>
                    <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.40368 14.0775L0.733728 14.4146H0.733728L1.40368 14.0775ZM3.02226 15.7163L3.36612 15.0497L3.36612 15.0497L3.02226 15.7163ZM15.6444 1.40873L15.9883 0.742197V0.742196L15.6444 1.40873ZM17.263 3.04754L16.593 3.38468V3.38468L17.263 3.04754ZM3.02226 1.40873L3.36612 2.07525L3.02226 1.40873ZM1.40368 3.04754L2.07363 3.38468L1.40368 3.04754ZM17.6667 6.625V5.875H16.9167V6.625H17.6667ZM25.8991 15.6131L25.2291 15.276V15.276L25.8991 15.6131ZM25.4944 16.0228L25.8383 16.6893H25.8383L25.4944 16.0228ZM23.725 7.08482L23.3811 7.75135L23.725 7.08482ZM25.5459 8.92848L26.2158 8.59133L25.5459 8.92848ZM6.92593 1.75H11.7407V0.25H6.92593V1.75ZM16.9167 7V16.125H18.4167V7H16.9167ZM1.75 10.125V7H0.25V10.125H1.75ZM0.25 10.125C0.25 11.1629 0.249431 11.9858 0.30289 12.6483C0.357034 13.3193 0.47023 13.891 0.733728 14.4146L2.07363 13.7403C1.93345 13.4618 1.84481 13.1073 1.79803 12.5277C1.75057 11.9395 1.75 11.1873 1.75 10.125H0.25ZM3.36612 15.0497C2.81107 14.7634 2.35809 14.3056 2.07363 13.7403L0.733728 14.4146C1.15945 15.2606 1.83965 15.9501 2.6784 16.3828L3.36612 15.0497ZM11.7407 1.75C12.7904 1.75 13.532 1.7506 14.1115 1.79854C14.682 1.84573 15.0286 1.93495 15.3006 2.07525L15.9883 0.742196C15.468 0.473776 14.8999 0.358633 14.2352 0.303644C13.5795 0.249402 12.7653 0.25 11.7407 0.25V1.75ZM18.4167 7C18.4167 5.96213 18.4172 5.13917 18.3638 4.47668C18.3096 3.80571 18.1964 3.234 17.9329 2.71039L16.593 3.38468C16.7332 3.66324 16.8219 4.01766 16.8686 4.59733C16.9161 5.18549 16.9167 5.93768 16.9167 7H18.4167ZM15.3005 2.07525C15.8556 2.3616 16.3086 2.81943 16.593 3.38468L17.9329 2.71039C17.5072 1.86443 16.827 1.1749 15.9883 0.742197L15.3005 2.07525ZM6.92593 0.25C5.90132 0.25 5.0872 0.249402 4.43151 0.303644C3.76678 0.358633 3.1987 0.473776 2.6784 0.742196L3.36612 2.07525C3.63808 1.93495 3.9847 1.84573 4.55517 1.79854C5.13468 1.7506 5.87626 1.75 6.92593 1.75V0.25ZM1.75 7C1.75 5.93768 1.75057 5.18549 1.79803 4.59733C1.84481 4.01766 1.93345 3.66324 2.07363 3.38468L0.733728 2.71039C0.47023 3.234 0.357034 3.80571 0.30289 4.47668C0.249431 5.13917 0.25 5.96213 0.25 7H1.75ZM2.6784 0.742196C1.83965 1.1749 1.15945 1.86443 0.733728 2.71039L2.07363 3.38468C2.35809 2.81943 2.81107 2.3616 3.36612 2.07525L2.6784 0.742196ZM17.6667 7.375H19.3333V5.875H17.6667V7.375ZM25.25 13.375V14.625H26.75V13.375H25.25ZM18.4167 7V6.625H16.9167V7H18.4167ZM25.25 14.625C25.25 14.8997 25.2494 15.0613 25.2398 15.1804C25.2309 15.2911 25.2179 15.2982 25.2291 15.276L26.569 15.9503C26.6811 15.7275 26.7187 15.5031 26.735 15.3011C26.7506 15.1076 26.75 14.8753 26.75 14.625H25.25ZM24.5185 16.875C24.7653 16.875 24.996 16.8756 25.1885 16.8597C25.39 16.843 25.6151 16.8045 25.8383 16.6893L25.1506 15.3563C25.1757 15.3433 25.1721 15.3559 25.0648 15.3648C24.9485 15.3744 24.7903 15.375 24.5185 15.375V16.875ZM25.2291 15.276C25.211 15.312 25.1829 15.3396 25.1506 15.3563L25.8383 16.6893C26.1544 16.5263 26.4096 16.267 26.569 15.9503L25.2291 15.276ZM19.3333 7.375C20.5126 7.375 21.3514 7.3756 22.0082 7.42992C22.6558 7.4835 23.0596 7.5855 23.3811 7.75135L24.0688 6.41829C23.499 6.12432 22.8737 5.99641 22.1318 5.93503C21.3989 5.8744 20.4876 5.875 19.3333 5.875V7.375ZM26.75 13.375C26.75 12.2059 26.7506 11.2845 26.6908 10.5438C26.6304 9.79467 26.5045 9.16508 26.2158 8.59133L24.8759 9.26562C25.0413 9.59432 25.1426 10.0066 25.1957 10.6645C25.2494 11.3308 25.25 12.1814 25.25 13.375H26.75ZM23.3811 7.75135C24.0233 8.08263 24.5471 8.61217 24.8759 9.26562L26.2158 8.59133C25.7457 7.65717 24.9947 6.89594 24.0688 6.41829L23.3811 7.75135ZM7.65741 16.125C7.65741 16.7551 7.15534 17.25 6.55556 17.25V18.75C8.00128 18.75 9.15741 17.5659 9.15741 16.125H7.65741ZM6.55556 17.25C5.95578 17.25 5.4537 16.7551 5.4537 16.125H3.9537C3.9537 17.5659 5.10984 18.75 6.55556 18.75V17.25ZM6.55556 15C7.15534 15 7.65741 15.4949 7.65741 16.125H9.15741C9.15741 14.6841 8.00127 13.5 6.55556 13.5V15ZM17.6667 15.375H8.40741V16.875H17.6667V15.375ZM5.4537 16.125C5.4537 16.1176 5.45377 16.1103 5.45391 16.103L3.95417 16.0751C3.95386 16.0917 3.9537 16.1083 3.9537 16.125H5.4537ZM5.45391 16.103C5.46542 15.4834 5.96274 15 6.55556 15V13.5C5.12661 13.5 3.98052 14.6568 3.95417 16.0751L5.45391 16.103ZM4.75029 15.3405C4.06209 15.2979 3.66908 15.206 3.36612 15.0497L2.6784 16.3828C3.25523 16.6804 3.893 16.7904 4.65778 16.8376L4.75029 15.3405ZM22.9352 16.125C22.9352 16.7551 22.4331 17.25 21.8333 17.25V18.75C23.2791 18.75 24.4352 17.5659 24.4352 16.125H22.9352ZM21.8333 17.25C21.2336 17.25 20.7315 16.7551 20.7315 16.125H19.2315C19.2315 17.5659 20.3876 18.75 21.8333 18.75V17.25ZM20.7315 16.125C20.7315 15.4949 21.2336 15 21.8333 15V13.5C20.3876 13.5 19.2315 14.6841 19.2315 16.125H20.7315ZM21.8333 15C22.4331 15 22.9352 15.4949 22.9352 16.125H24.4352C24.4352 14.6841 23.2791 13.5 21.8333 13.5V15ZM24.5185 15.375H23.6852V16.875H24.5185V15.375ZM19.9815 15.375H17.6667V16.875H19.9815V15.375Z" fill="#1A1A1A"/>
                    </svg>
                    </div>
                    <p>Проверить статус доставки</p>
                </a>
            
                <a className='blocks_block w-[25%] bg-[#f4f4f4]' href='#'>
                    <div>
                    <h2>Покупки</h2>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 12C17 14.2382 13.4183 16.0526 9 16.0526C4.58172 16.0526 1 14.2382 1 12M17 12V18.9474C17 21.1856 13.4183 23 9 23C4.58172 23 1 21.1856 1 18.9474V12M17 12V5.05263M1 12V5.05263M17 5.05263C17 7.29084 13.4183 9.10526 9 9.10526C4.58172 9.10526 1 7.29084 1 5.05263M17 5.05263C17 2.81442 13.4183 1 9 1C4.58172 1 1 2.81442 1 5.05263" stroke="#1A1A1A" stroke-width="1.5"/>
                    </svg>
                    </div>
                    <p>История ваших покупок</p>
                </a>
            
                <a className='blocks_block w-[25%] bg-[#f4f4f4]' href='#'>
                    <h2>Чеки</h2>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2129 1C16.2108 1 15.3984 3.41766 15.3984 6.4H17.2129C18.0873 6.4 18.5245 6.4 18.7952 6.09809C19.0658 5.79618 19.0187 5.3986 18.9245 4.60343C18.6757 2.50429 18.0033 1 17.2129 1Z" stroke="#1A1A1A" stroke-width="1.5"/>
                        <path d="M15.4 6.44883V15.9812C15.4 17.3417 15.4 18.022 14.9842 18.2898C14.3048 18.7274 13.2544 17.8097 12.7262 17.4766C12.2897 17.2013 12.0715 17.0636 11.8293 17.0557C11.5675 17.0471 11.3454 17.1791 10.8738 17.4766L9.154 18.5611C8.69009 18.8537 8.45811 19 8.2 19C7.94189 19 7.70991 18.8537 7.246 18.5611L5.52621 17.4766C5.08973 17.2013 4.87149 17.0636 4.62928 17.0557C4.36755 17.0471 4.14543 17.1791 3.67379 17.4766C3.14555 17.8097 2.09519 18.7274 1.41576 18.2898C1 18.022 1 17.3417 1 15.9812V6.44883C1 3.88023 1 2.59593 1.79081 1.79796C2.58162 1 3.85442 1 6.4 1H17.2" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.19844 6.4C7.20432 6.4 6.39844 7.00442 6.39844 7.75C6.39844 8.49558 7.20432 9.1 8.19844 9.1C9.19255 9.1 9.99844 9.70442 9.99844 10.45C9.99844 11.1956 9.19255 11.8 8.19844 11.8M8.19844 6.4C8.98217 6.4 9.64891 6.77566 9.89601 7.3M8.19844 6.4V5.5M8.19844 11.8C7.41471 11.8 6.74796 11.4243 6.50086 10.9M8.19844 11.8V12.7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <p>Смотреть</p>
                </a>
            
            </section>
            
            <section className='userpage_blocks mobile_block_link w-[95%] pl-[5%] pb-[60px]'>
            
                <a className='blocks_block w-[100%] bg-[#f4f4f4]' href='#'>
                    <div>
                    <h2>Доставки</h2>
                    <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.40368 14.0775L0.733728 14.4146H0.733728L1.40368 14.0775ZM3.02226 15.7163L3.36612 15.0497L3.36612 15.0497L3.02226 15.7163ZM15.6444 1.40873L15.9883 0.742197V0.742196L15.6444 1.40873ZM17.263 3.04754L16.593 3.38468V3.38468L17.263 3.04754ZM3.02226 1.40873L3.36612 2.07525L3.02226 1.40873ZM1.40368 3.04754L2.07363 3.38468L1.40368 3.04754ZM17.6667 6.625V5.875H16.9167V6.625H17.6667ZM25.8991 15.6131L25.2291 15.276V15.276L25.8991 15.6131ZM25.4944 16.0228L25.8383 16.6893H25.8383L25.4944 16.0228ZM23.725 7.08482L23.3811 7.75135L23.725 7.08482ZM25.5459 8.92848L26.2158 8.59133L25.5459 8.92848ZM6.92593 1.75H11.7407V0.25H6.92593V1.75ZM16.9167 7V16.125H18.4167V7H16.9167ZM1.75 10.125V7H0.25V10.125H1.75ZM0.25 10.125C0.25 11.1629 0.249431 11.9858 0.30289 12.6483C0.357034 13.3193 0.47023 13.891 0.733728 14.4146L2.07363 13.7403C1.93345 13.4618 1.84481 13.1073 1.79803 12.5277C1.75057 11.9395 1.75 11.1873 1.75 10.125H0.25ZM3.36612 15.0497C2.81107 14.7634 2.35809 14.3056 2.07363 13.7403L0.733728 14.4146C1.15945 15.2606 1.83965 15.9501 2.6784 16.3828L3.36612 15.0497ZM11.7407 1.75C12.7904 1.75 13.532 1.7506 14.1115 1.79854C14.682 1.84573 15.0286 1.93495 15.3006 2.07525L15.9883 0.742196C15.468 0.473776 14.8999 0.358633 14.2352 0.303644C13.5795 0.249402 12.7653 0.25 11.7407 0.25V1.75ZM18.4167 7C18.4167 5.96213 18.4172 5.13917 18.3638 4.47668C18.3096 3.80571 18.1964 3.234 17.9329 2.71039L16.593 3.38468C16.7332 3.66324 16.8219 4.01766 16.8686 4.59733C16.9161 5.18549 16.9167 5.93768 16.9167 7H18.4167ZM15.3005 2.07525C15.8556 2.3616 16.3086 2.81943 16.593 3.38468L17.9329 2.71039C17.5072 1.86443 16.827 1.1749 15.9883 0.742197L15.3005 2.07525ZM6.92593 0.25C5.90132 0.25 5.0872 0.249402 4.43151 0.303644C3.76678 0.358633 3.1987 0.473776 2.6784 0.742196L3.36612 2.07525C3.63808 1.93495 3.9847 1.84573 4.55517 1.79854C5.13468 1.7506 5.87626 1.75 6.92593 1.75V0.25ZM1.75 7C1.75 5.93768 1.75057 5.18549 1.79803 4.59733C1.84481 4.01766 1.93345 3.66324 2.07363 3.38468L0.733728 2.71039C0.47023 3.234 0.357034 3.80571 0.30289 4.47668C0.249431 5.13917 0.25 5.96213 0.25 7H1.75ZM2.6784 0.742196C1.83965 1.1749 1.15945 1.86443 0.733728 2.71039L2.07363 3.38468C2.35809 2.81943 2.81107 2.3616 3.36612 2.07525L2.6784 0.742196ZM17.6667 7.375H19.3333V5.875H17.6667V7.375ZM25.25 13.375V14.625H26.75V13.375H25.25ZM18.4167 7V6.625H16.9167V7H18.4167ZM25.25 14.625C25.25 14.8997 25.2494 15.0613 25.2398 15.1804C25.2309 15.2911 25.2179 15.2982 25.2291 15.276L26.569 15.9503C26.6811 15.7275 26.7187 15.5031 26.735 15.3011C26.7506 15.1076 26.75 14.8753 26.75 14.625H25.25ZM24.5185 16.875C24.7653 16.875 24.996 16.8756 25.1885 16.8597C25.39 16.843 25.6151 16.8045 25.8383 16.6893L25.1506 15.3563C25.1757 15.3433 25.1721 15.3559 25.0648 15.3648C24.9485 15.3744 24.7903 15.375 24.5185 15.375V16.875ZM25.2291 15.276C25.211 15.312 25.1829 15.3396 25.1506 15.3563L25.8383 16.6893C26.1544 16.5263 26.4096 16.267 26.569 15.9503L25.2291 15.276ZM19.3333 7.375C20.5126 7.375 21.3514 7.3756 22.0082 7.42992C22.6558 7.4835 23.0596 7.5855 23.3811 7.75135L24.0688 6.41829C23.499 6.12432 22.8737 5.99641 22.1318 5.93503C21.3989 5.8744 20.4876 5.875 19.3333 5.875V7.375ZM26.75 13.375C26.75 12.2059 26.7506 11.2845 26.6908 10.5438C26.6304 9.79467 26.5045 9.16508 26.2158 8.59133L24.8759 9.26562C25.0413 9.59432 25.1426 10.0066 25.1957 10.6645C25.2494 11.3308 25.25 12.1814 25.25 13.375H26.75ZM23.3811 7.75135C24.0233 8.08263 24.5471 8.61217 24.8759 9.26562L26.2158 8.59133C25.7457 7.65717 24.9947 6.89594 24.0688 6.41829L23.3811 7.75135ZM7.65741 16.125C7.65741 16.7551 7.15534 17.25 6.55556 17.25V18.75C8.00128 18.75 9.15741 17.5659 9.15741 16.125H7.65741ZM6.55556 17.25C5.95578 17.25 5.4537 16.7551 5.4537 16.125H3.9537C3.9537 17.5659 5.10984 18.75 6.55556 18.75V17.25ZM6.55556 15C7.15534 15 7.65741 15.4949 7.65741 16.125H9.15741C9.15741 14.6841 8.00127 13.5 6.55556 13.5V15ZM17.6667 15.375H8.40741V16.875H17.6667V15.375ZM5.4537 16.125C5.4537 16.1176 5.45377 16.1103 5.45391 16.103L3.95417 16.0751C3.95386 16.0917 3.9537 16.1083 3.9537 16.125H5.4537ZM5.45391 16.103C5.46542 15.4834 5.96274 15 6.55556 15V13.5C5.12661 13.5 3.98052 14.6568 3.95417 16.0751L5.45391 16.103ZM4.75029 15.3405C4.06209 15.2979 3.66908 15.206 3.36612 15.0497L2.6784 16.3828C3.25523 16.6804 3.893 16.7904 4.65778 16.8376L4.75029 15.3405ZM22.9352 16.125C22.9352 16.7551 22.4331 17.25 21.8333 17.25V18.75C23.2791 18.75 24.4352 17.5659 24.4352 16.125H22.9352ZM21.8333 17.25C21.2336 17.25 20.7315 16.7551 20.7315 16.125H19.2315C19.2315 17.5659 20.3876 18.75 21.8333 18.75V17.25ZM20.7315 16.125C20.7315 15.4949 21.2336 15 21.8333 15V13.5C20.3876 13.5 19.2315 14.6841 19.2315 16.125H20.7315ZM21.8333 15C22.4331 15 22.9352 15.4949 22.9352 16.125H24.4352C24.4352 14.6841 23.2791 13.5 21.8333 13.5V15ZM24.5185 15.375H23.6852V16.875H24.5185V15.375ZM19.9815 15.375H17.6667V16.875H19.9815V15.375Z" fill="#1A1A1A"/>
                    </svg>
                    </div>
                    <p>Проверить статус доставки</p>
                </a>
            
                <a className='blocks_block w-[100%] bg-[#f4f4f4]' href='#'>
                    <div>
                        <h2>Покупки</h2>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 12C17 14.2382 13.4183 16.0526 9 16.0526C4.58172 16.0526 1 14.2382 1 12M17 12V18.9474C17 21.1856 13.4183 23 9 23C4.58172 23 1 21.1856 1 18.9474V12M17 12V5.05263M1 12V5.05263M17 5.05263C17 7.29084 13.4183 9.10526 9 9.10526C4.58172 9.10526 1 7.29084 1 5.05263M17 5.05263C17 2.81442 13.4183 1 9 1C4.58172 1 1 2.81442 1 5.05263" stroke="#1A1A1A" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <p>История ваших покупок</p>
                </a>
            
                <a className='blocks_block w-[100%] bg-[#f4f4f4]' href='#'>
                    <div>
                        <h2>Чеки</h2>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2129 1C16.2108 1 15.3984 3.41766 15.3984 6.4H17.2129C18.0873 6.4 18.5245 6.4 18.7952 6.09809C19.0658 5.79618 19.0187 5.3986 18.9245 4.60343C18.6757 2.50429 18.0033 1 17.2129 1Z" stroke="#1A1A1A" stroke-width="1.5"/>
                            <path d="M15.4 6.44883V15.9812C15.4 17.3417 15.4 18.022 14.9842 18.2898C14.3048 18.7274 13.2544 17.8097 12.7262 17.4766C12.2897 17.2013 12.0715 17.0636 11.8293 17.0557C11.5675 17.0471 11.3454 17.1791 10.8738 17.4766L9.154 18.5611C8.69009 18.8537 8.45811 19 8.2 19C7.94189 19 7.70991 18.8537 7.246 18.5611L5.52621 17.4766C5.08973 17.2013 4.87149 17.0636 4.62928 17.0557C4.36755 17.0471 4.14543 17.1791 3.67379 17.4766C3.14555 17.8097 2.09519 18.7274 1.41576 18.2898C1 18.022 1 17.3417 1 15.9812V6.44883C1 3.88023 1 2.59593 1.79081 1.79796C2.58162 1 3.85442 1 6.4 1H17.2" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.19844 6.4C7.20432 6.4 6.39844 7.00442 6.39844 7.75C6.39844 8.49558 7.20432 9.1 8.19844 9.1C9.19255 9.1 9.99844 9.70442 9.99844 10.45C9.99844 11.1956 9.19255 11.8 8.19844 11.8M8.19844 6.4C8.98217 6.4 9.64891 6.77566 9.89601 7.3M8.19844 6.4V5.5M8.19844 11.8C7.41471 11.8 6.74796 11.4243 6.50086 10.9M8.19844 11.8V12.7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p>Смотреть</p>
                </a>
            
            </section>
        </main>
    )
}
