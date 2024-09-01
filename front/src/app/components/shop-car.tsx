
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ShopCar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className='cursor-pointer hover:scale-110 hover:bg-pinks active:bg-pinks transition ease-in-out rounded-xl' onClick={() => setOpenModal(true)}>
        {/* svg desktop */}
        <svg className='mx-4 my-2 hidden lg:flex' width="93" height="25" viewBox="0 0 93 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.03305 4.33333H24L21.5556 12.5H7.34931M22.7778 17.1667H8.11111L5.66667 2H2M9.33333 21.8333C9.33333 22.4777 8.78612 23 8.11111 23C7.4361 23 6.88889 22.4777 6.88889 21.8333C6.88889 21.189 7.4361 20.6667 8.11111 20.6667C8.78612 20.6667 9.33333 21.189 9.33333 21.8333ZM22.7778 21.8333C22.7778 22.4777 22.2306 23 21.5556 23C20.8805 23 20.3333 22.4777 20.3333 21.8333C20.3333 21.189 20.8805 20.6667 21.5556 20.6667C22.2306 20.6667 22.7778 21.189 22.7778 21.8333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40.1875 17.3828H41.6875C41.6094 18.1016 41.4036 18.7448 41.0703 19.3125C40.737 19.8802 40.2656 20.3307 39.6562 20.6641C39.0469 20.9922 38.2865 21.1562 37.375 21.1562C36.7083 21.1562 36.1016 21.0312 35.5547 20.7812C35.013 20.5312 34.5469 20.1771 34.1562 19.7188C33.7656 19.2552 33.4635 18.7005 33.25 18.0547C33.0417 17.4036 32.9375 16.6797 32.9375 15.8828V14.75C32.9375 13.9531 33.0417 13.2318 33.25 12.5859C33.4635 11.9349 33.7682 11.3776 34.1641 10.9141C34.5651 10.4505 35.0469 10.0938 35.6094 9.84375C36.1719 9.59375 36.8047 9.46875 37.5078 9.46875C38.3672 9.46875 39.0938 9.63021 39.6875 9.95312C40.2812 10.276 40.7422 10.724 41.0703 11.2969C41.4036 11.8646 41.6094 12.5234 41.6875 13.2734H40.1875C40.1146 12.7422 39.9792 12.2865 39.7812 11.9062C39.5833 11.5208 39.3021 11.224 38.9375 11.0156C38.5729 10.8073 38.0964 10.7031 37.5078 10.7031C37.0026 10.7031 36.5573 10.7995 36.1719 10.9922C35.7917 11.1849 35.4714 11.4583 35.2109 11.8125C34.9557 12.1667 34.763 12.5911 34.6328 13.0859C34.5026 13.5807 34.4375 14.1302 34.4375 14.7344V15.8828C34.4375 16.4401 34.4948 16.9635 34.6094 17.4531C34.7292 17.9427 34.9089 18.3724 35.1484 18.7422C35.388 19.112 35.6927 19.4036 36.0625 19.6172C36.4323 19.8255 36.8698 19.9297 37.375 19.9297C38.0156 19.9297 38.526 19.8281 38.9062 19.625C39.2865 19.4219 39.5729 19.1302 39.7656 18.75C39.9635 18.3698 40.1042 17.9141 40.1875 17.3828ZM48.5078 19.5547V15.2031C48.5078 14.8698 48.4401 14.5807 48.3047 14.3359C48.1745 14.0859 47.9766 13.8932 47.7109 13.7578C47.4453 13.6224 47.1172 13.5547 46.7266 13.5547C46.362 13.5547 46.0417 13.6172 45.7656 13.7422C45.4948 13.8672 45.2812 14.0312 45.125 14.2344C44.974 14.4375 44.8984 14.6562 44.8984 14.8906H43.4531C43.4531 14.5885 43.5312 14.2891 43.6875 13.9922C43.8438 13.6953 44.0677 13.4271 44.3594 13.1875C44.6562 12.9427 45.0104 12.75 45.4219 12.6094C45.8385 12.4635 46.3021 12.3906 46.8125 12.3906C47.4271 12.3906 47.9688 12.4948 48.4375 12.7031C48.9115 12.9115 49.2812 13.2266 49.5469 13.6484C49.8177 14.0651 49.9531 14.5885 49.9531 15.2188V19.1562C49.9531 19.4375 49.9766 19.737 50.0234 20.0547C50.0755 20.3724 50.151 20.6458 50.25 20.875V21H48.7422C48.6693 20.8333 48.612 20.612 48.5703 20.3359C48.5286 20.0547 48.5078 19.7943 48.5078 19.5547ZM48.7578 15.875L48.7734 16.8906H47.3125C46.901 16.8906 46.5339 16.9245 46.2109 16.9922C45.888 17.0547 45.6172 17.151 45.3984 17.2812C45.1797 17.4115 45.013 17.5755 44.8984 17.7734C44.7839 17.9661 44.7266 18.1927 44.7266 18.4531C44.7266 18.7188 44.7865 18.9609 44.9062 19.1797C45.026 19.3984 45.2057 19.5729 45.4453 19.7031C45.6901 19.8281 45.9896 19.8906 46.3438 19.8906C46.7865 19.8906 47.1771 19.7969 47.5156 19.6094C47.8542 19.4219 48.1224 19.1927 48.3203 18.9219C48.5234 18.651 48.6328 18.388 48.6484 18.1328L49.2656 18.8281C49.2292 19.0469 49.1302 19.2891 48.9688 19.5547C48.8073 19.8203 48.5911 20.0755 48.3203 20.3203C48.0547 20.5599 47.737 20.7604 47.3672 20.9219C47.0026 21.0781 46.5911 21.1562 46.1328 21.1562C45.5599 21.1562 45.0573 21.0443 44.625 20.8203C44.1979 20.5964 43.8646 20.2969 43.625 19.9219C43.3906 19.5417 43.2734 19.1172 43.2734 18.6484C43.2734 18.1953 43.362 17.7969 43.5391 17.4531C43.7161 17.1042 43.9714 16.8151 44.3047 16.5859C44.638 16.3516 45.0391 16.1745 45.5078 16.0547C45.9766 15.9349 46.5 15.875 47.0781 15.875H48.7578ZM53.6719 13.875V21H52.2266V12.5469H53.6328L53.6719 13.875ZM56.3125 12.5L56.3047 13.8438C56.1849 13.8177 56.0703 13.8021 55.9609 13.7969C55.8568 13.7865 55.737 13.7812 55.6016 13.7812C55.2682 13.7812 54.974 13.8333 54.7188 13.9375C54.4635 14.0417 54.2474 14.1875 54.0703 14.375C53.8932 14.5625 53.7526 14.7865 53.6484 15.0469C53.5495 15.3021 53.4844 15.5833 53.4531 15.8906L53.0469 16.125C53.0469 15.6146 53.0964 15.1354 53.1953 14.6875C53.2995 14.2396 53.4583 13.8438 53.6719 13.5C53.8854 13.151 54.1562 12.8802 54.4844 12.6875C54.8177 12.4896 55.2135 12.3906 55.6719 12.3906C55.776 12.3906 55.8958 12.4036 56.0312 12.4297C56.1667 12.4505 56.2604 12.474 56.3125 12.5ZM59.0938 13.875V21H57.6484V12.5469H59.0547L59.0938 13.875ZM61.7344 12.5L61.7266 13.8438C61.6068 13.8177 61.4922 13.8021 61.3828 13.7969C61.2786 13.7865 61.1589 13.7812 61.0234 13.7812C60.6901 13.7812 60.3958 13.8333 60.1406 13.9375C59.8854 14.0417 59.6693 14.1875 59.4922 14.375C59.3151 14.5625 59.1745 14.7865 59.0703 15.0469C58.9714 15.3021 58.9062 15.5833 58.875 15.8906L58.4688 16.125C58.4688 15.6146 58.5182 15.1354 58.6172 14.6875C58.7214 14.2396 58.8802 13.8438 59.0938 13.5C59.3073 13.151 59.5781 12.8802 59.9062 12.6875C60.2396 12.4896 60.6354 12.3906 61.0938 12.3906C61.1979 12.3906 61.3177 12.4036 61.4531 12.4297C61.5885 12.4505 61.6823 12.474 61.7344 12.5ZM64.6406 12.5469V21H63.1875V12.5469H64.6406ZM63.0781 10.3047C63.0781 10.0703 63.1484 9.8724 63.2891 9.71094C63.4349 9.54948 63.6484 9.46875 63.9297 9.46875C64.2057 9.46875 64.4167 9.54948 64.5625 9.71094C64.7135 9.8724 64.7891 10.0703 64.7891 10.3047C64.7891 10.5286 64.7135 10.7214 64.5625 10.8828C64.4167 11.0391 64.2057 11.1172 63.9297 11.1172C63.6484 11.1172 63.4349 11.0391 63.2891 10.8828C63.1484 10.7214 63.0781 10.5286 63.0781 10.3047ZM68.4062 14.3516V21H66.9609V12.5469H68.3281L68.4062 14.3516ZM68.0625 16.4531L67.4609 16.4297C67.4661 15.8516 67.5521 15.3177 67.7188 14.8281C67.8854 14.3333 68.1198 13.9036 68.4219 13.5391C68.724 13.1745 69.0833 12.8932 69.5 12.6953C69.9219 12.4922 70.388 12.3906 70.8984 12.3906C71.3151 12.3906 71.6901 12.4479 72.0234 12.5625C72.3568 12.6719 72.6406 12.849 72.875 13.0938C73.1146 13.3385 73.2969 13.6562 73.4219 14.0469C73.5469 14.4323 73.6094 14.9036 73.6094 15.4609V21H72.1562V15.4453C72.1562 15.0026 72.0911 14.6484 71.9609 14.3828C71.8307 14.112 71.6406 13.9167 71.3906 13.7969C71.1406 13.6719 70.8333 13.6094 70.4688 13.6094C70.1094 13.6094 69.7812 13.6849 69.4844 13.8359C69.1927 13.987 68.9401 14.1953 68.7266 14.4609C68.5182 14.7266 68.3542 15.0312 68.2344 15.375C68.1198 15.7135 68.0625 16.0729 68.0625 16.4531ZM77.25 9V21H75.8047V9H77.25ZM76.9062 16.4531L76.3047 16.4297C76.3099 15.8516 76.3958 15.3177 76.5625 14.8281C76.7292 14.3333 76.9635 13.9036 77.2656 13.5391C77.5677 13.1745 77.9271 12.8932 78.3438 12.6953C78.7656 12.4922 79.2318 12.3906 79.7422 12.3906C80.1589 12.3906 80.5339 12.4479 80.8672 12.5625C81.2005 12.6719 81.4844 12.849 81.7188 13.0938C81.9583 13.3385 82.1406 13.6562 82.2656 14.0469C82.3906 14.4323 82.4531 14.9036 82.4531 15.4609V21H81V15.4453C81 15.0026 80.9349 14.6484 80.8047 14.3828C80.6745 14.112 80.4844 13.9167 80.2344 13.7969C79.9844 13.6719 79.6771 13.6094 79.3125 13.6094C78.9531 13.6094 78.625 13.6849 78.3281 13.8359C78.0365 13.987 77.7839 14.1953 77.5703 14.4609C77.362 14.7266 77.1979 15.0312 77.0781 15.375C76.9635 15.7135 76.9062 16.0729 76.9062 16.4531ZM84.2344 16.8672V16.6875C84.2344 16.0781 84.3229 15.513 84.5 14.9922C84.6771 14.4661 84.9323 14.0104 85.2656 13.625C85.599 13.2344 86.0026 12.9323 86.4766 12.7188C86.9505 12.5 87.4818 12.3906 88.0703 12.3906C88.6641 12.3906 89.1979 12.5 89.6719 12.7188C90.151 12.9323 90.5573 13.2344 90.8906 13.625C91.2292 14.0104 91.487 14.4661 91.6641 14.9922C91.8411 15.513 91.9297 16.0781 91.9297 16.6875V16.8672C91.9297 17.4766 91.8411 18.0417 91.6641 18.5625C91.487 19.0833 91.2292 19.5391 90.8906 19.9297C90.5573 20.3151 90.1536 20.6172 89.6797 20.8359C89.2109 21.0495 88.6797 21.1562 88.0859 21.1562C87.4922 21.1562 86.9583 21.0495 86.4844 20.8359C86.0104 20.6172 85.6042 20.3151 85.2656 19.9297C84.9323 19.5391 84.6771 19.0833 84.5 18.5625C84.3229 18.0417 84.2344 17.4766 84.2344 16.8672ZM85.6797 16.6875V16.8672C85.6797 17.2891 85.7292 17.6875 85.8281 18.0625C85.9271 18.4323 86.0755 18.7604 86.2734 19.0469C86.4766 19.3333 86.7292 19.5599 87.0312 19.7266C87.3333 19.888 87.6849 19.9688 88.0859 19.9688C88.4818 19.9688 88.8281 19.888 89.125 19.7266C89.4271 19.5599 89.6771 19.3333 89.875 19.0469C90.0729 18.7604 90.2214 18.4323 90.3203 18.0625C90.4245 17.6875 90.4766 17.2891 90.4766 16.8672V16.6875C90.4766 16.2708 90.4245 15.8776 90.3203 15.5078C90.2214 15.1328 90.0703 14.8021 89.8672 14.5156C89.6693 14.224 89.4193 13.9948 89.1172 13.8281C88.8203 13.6615 88.4714 13.5781 88.0703 13.5781C87.6745 13.5781 87.3255 13.6615 87.0234 13.8281C86.7266 13.9948 86.4766 14.224 86.2734 14.5156C86.0755 14.8021 85.9271 15.1328 85.8281 15.5078C85.7292 15.8776 85.6797 16.2708 85.6797 16.6875Z" fill="white" />
        </svg>
        {/* svg tablet */}
        <svg className='m-2 hidden sm:inline lg:hidden' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.03305 4.33333H24L21.5556 12.5H7.34931M22.7778 17.1667H8.11111L5.66667 2H2M9.33333 21.8333C9.33333 22.4777 8.78612 23 8.11111 23C7.4361 23 6.88889 22.4777 6.88889 21.8333C6.88889 21.189 7.4361 20.6667 8.11111 20.6667C8.78612 20.6667 9.33333 21.189 9.33333 21.8333ZM22.7778 21.8333C22.7778 22.4777 22.2306 23 21.5556 23C20.8805 23 20.3333 22.4777 20.3333 21.8333C20.3333 21.189 20.8805 20.6667 21.5556 20.6667C22.2306 20.6667 22.7778 21.189 22.7778 21.8333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* svg mobile */}
        <svg className='m-2 mr-4 hidden max-sm:flex hover:bg-none' width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.76633 4.74032H28L25.1111 14.3314H8.32191M26.5556 19.8121H9.22222L6.33333 2H2M10.6667 25.2927C10.6667 26.0495 10.02 26.6629 9.22222 26.6629C8.42448 26.6629 7.77778 26.0495 7.77778 25.2927C7.77778 24.536 8.42448 23.9226 9.22222 23.9226C10.02 23.9226 10.6667 24.536 10.6667 25.2927ZM26.5556 25.2927C26.5556 26.0495 25.9089 26.6629 25.1111 26.6629C24.3133 26.6629 23.6667 26.0495 23.6667 25.2927C23.6667 24.536 24.3133 23.9226 25.1111 23.9226C25.9089 23.9226 26.5556 24.536 26.5556 25.2927Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
