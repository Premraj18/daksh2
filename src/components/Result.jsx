import React from 'react'

const Result = () => {
  return (
    <div className='h-auto'>
    {/* <div className="h-[600px] md:min-h-[650px] bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: "url(" + "/sponserbg.webp" + ")",
        }}

    >
        <div className='w-full h-[800px]'
            style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
        >

        </div>
    </div> */}

    <div className='h-auto flex flex-col items-center  bg-fixed bg-center bg-cover bg-no-repeat '
        style={{
            backgroundImage: "url(" + "/sponserbg.webp" + ")",
        }}
    >
        <h1 className='text-lg text-center px-2 sm:text-3xl my-10'>OFF-ROAD QUEST- PRELIMS RESULT</h1>
        <table class="table-auto md:w-[70%] bg-transparent  sm:mb-20 mb-20">
            <tbody className='text-white text-xs sm:text-base '
                style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
            >
                <tr>
                    <td class="border px-1 sm:px-4 py-2 text-lime-600 ">NAME</td>
                    <td class="border px-1 sm:px-4 py-2 text-lime-600">REG NO.</td>
                    <td class="border px-1 sm:px-4 py-2 text-lime-600">NAME</td>
                    <td class="border px-1 sm:px-4 py-2 text-lime-600">REG NO.</td>
                </tr>
                <tr class="">
                    <td class="border px-1 sm:px-4 py-2">NIRMAL NIRANJAN PATIL</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGME063</td>
                    <td class="border px-1 sm:px-4 py-2">SUNNY KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGEE060</td>   
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">RAUSHAN KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGME044</td>
                    <td class="border px-1 sm:px-4 py-2">SHREELEKHA ADHIKARY</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGEE027</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">ADARSH KUMAR AGRAHARI</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGME077</td>
                    <td class="border px-1 sm:px-4 py-2">TANISHQ GUPTA </td>
                    <td class="border px-1 sm:px-4 py-2">2023UGCS074</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">ANKIT RAJ</td>
                    <td class="border px-1 sm:px-4 py-2">2023UGME104</td>
                    <td class="border px-1 sm:px-4 py-2">UDAY KESARWANI </td>
                    <td class="border px-1 sm:px-4 py-2">2023UGME003</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">PRINCE PATWA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEC109</td>
                    <td class="border px-1 sm:px-4 py-2 ">SAIYAM NARAYAN </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME001</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">RAJU KUMAR GUPTA </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME039</td>
                    <td class="border px-1 sm:px-4 py-2 ">PRASHANTA UPADHYAY</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGPI037</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SHRIYANSH JAISWAL </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME090</td>
                    <td class="border px-1 sm:px-4 py-2 ">MRINAL AYUSH RAJ</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME052</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">DEBDEEP CHOUDHARY </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME002</td>
                    <td class="border px-1 sm:px-4 py-2 ">SHRISH KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME010</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">KUMAR ASHISH</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME076</td>
                    <td class="border px-1 sm:px-4 py-2 ">MAYANK MOHIT AGARWAL </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME022</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">HARSH VARDHAN PANDEY </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME055</td>
                    <td class="border px-1 sm:px-4 py-2 ">YUVRAJ SINGH</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE029</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SHUBHANGI</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE018</td>
                    <td class="border px-1 sm:px-4 py-2 ">PRIYANSHU TIWARI</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE105</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">AMAN KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME005</td>
                    <td class="border px-1 sm:px-4 py-2 ">SRIJAN SWAPNIL </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGCS020</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">HARSH SHARMA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME047</td>
                    <td class="border px-1 sm:px-4 py-2 ">RAJNEET</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME113</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SHRISTI SHREE</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE048</td>
                    <td class="border px-1 sm:px-4 py-2 ">SUMANT NANDA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE069</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SHRISTI SHREYA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE026</td>
                    <td class="border px-1 sm:px-4 py-2 ">NAVYA MISHRA </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME038</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">DIVYANSH MISHRA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME115</td>
                    <td class="border px-1 sm:px-4 py-2 ">MAHIR KUMAR RAJAK</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME013</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SWATI KUMARI</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE056</td>
                    <td class="border px-1 sm:px-4 py-2 ">PUSHPRAJ ANAND</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME084</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SURYANSH SHRIWASTAVA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM029</td>
                    <td class="border px-1 sm:px-4 py-2 ">NILANJAN DE </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE008</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">ISHAN SINGH</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM063</td>
                    <td class="border px-1 sm:px-4 py-2 ">SURAJ KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME059</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SUBHOJEET MUKHERJEE</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM032</td>
                    <td class="border px-1 sm:px-4 py-2 "> MIR HASIN TANBIR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM034</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">UTSAV SHRESTH</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE079</td>
                    <td class="border px-1 sm:px-4 py-2 ">PALLAB PRATIHAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGME004</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">SRINIWAS PRASAD</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM058</td>
                    <td class="border px-1 sm:px-4 py-2 ">SHUBHAM KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE100</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">PIYUSH KUMAR</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE004</td>
                    <td class="border px-1 sm:px-4 py-2 ">ABHINAV RAJ</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEC014</td>
                </tr>
                <tr>
                    <td class="border px-1 sm:px-4 py-2">YASH SRIVASTAVA </td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGEE104</td>
                    <td class="border px-1 sm:px-4 py-2 ">ADITI SINHA</td>
                    <td class="border px-1 sm:px-4 py-2 ">2023UGMM054</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Result
