import React from 'react'
import Layout from '@/component/layout/layout'


export default function PetInsurance() {
  return (
    <>
      <Layout title="寵度寵物保險" pageName="pet-insurance">

        {/* section 1 介紹 start */}
        <div className="container-fluid d-flex justify-content-center bg-image pt-5">
          <div
            className="row align-items-center"
            style={{ margin: 0, padding: "0 60px" }}
          >
            <div
              className="col-lg-5 d-flex justify-content-center"
              style={{ padding: "0 6.25rem" }}
            >
              <img
                className="w-80 h-80"
                loading="lazy"
                src="/pic/dog-with-cat-v3.png"
                alt=""
              />
            </div>
            <div className="col-lg-7" style={{ padding: "0 1.5625rem 0 0" }}>
              <div className="main-text d-flex">
                <h2 className="highlight-text text-color">
                  讓每一個寵物家庭，都有專屬的健康
                  <span
                    className="own-blue"
                    style={{ fontSize: "inherit", fontWeight: "inherit" }}
                  >
                    守護者
                  </span>
                </h2>
              </div>
              <h4
                className="caption-text text-color"
                style={{ marginBottom: "1.875rem" }}
              >
                保護您的毛孩子，就像保護家人一樣
              </h4>
              <div className="d-flex justify-content-center overflow-hidden">
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
                <img
                  loading="lazy"
                  src="/pic/Fish_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "6.25rem", height: "6.25rem" }}
                />
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
                <img
                  loading="lazy"
                  src="/pic/Fish_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "6.25rem", height: "6.25rem" }}
                />
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
                <img
                  loading="lazy"
                  src="/pic/Fish_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "6.25rem", height: "6.25rem" }}
                />
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
                <img
                  loading="lazy"
                  src="/pic/Fish_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "6.25rem", height: "6.25rem" }}
                />
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
                <img
                  loading="lazy"
                  src="/pic/Fish_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "6.25rem", height: "6.25rem" }}
                />
                <img
                  loading="lazy"
                  src="/pic/Dog_Bone.png"
                  alt=""
                  className="img-fluid"
                  style={{
                    transform: "rotate(-13deg)",
                    width: "6.25rem",
                    height: "6.25rem"
                  }}
                />
              </div>
              <h5 className="text-color" style={{ margin: "1.875rem 0 0 0" }}>
                我們的團隊由保險業的專家組成，同時也是熱愛飼養多隻寵物的飼主。對我們來說，寵物一直是我們的家人。選擇我們的寵物保險服務，讓您的毛孩子擁有專屬的健康守護者，讓您與您的愛寵都能享有最貼心、最專業的保障。
              </h5>
              <a href="#/">
                <button
                  className="own-btn1 border-0"
                  style={{ marginTop: "1.875rem" }}
                >
                  了解更多
                </button>
              </a>
              <div className="stats-container" style={{ marginTop: "1.875rem" }}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="text-center">
                      <h1 style={{ lineHeight: '57px' }}>1,500,000+</h1>
                      <h5 style={{ fontWeight: 700 }}>寵爸寵媽</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="text-center">
                      <h1 style={{ lineHeight: '57px' }}>750,000+</h1>
                      <h5 style={{ fontWeight: 700 }}>理賠案件</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 1 end */}

        {/* section 2 常見醫療花費 start */}
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-12" style={{ height: "7.5rem" }}>
              <img
                className="w-100"
                loading="lazy"
                src="/pic/section2-top-bar2.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2">
              <h2 className="d-flex justify-content-center text-color">
                常見醫療花費
              </h2>
            </div>
          </div>
          <div className="row" style={{ padding: "0 60px" }}>
            <div
              className="col-lg-5 d-flex align-items-center justify-content-end"
              style={{ paddingLeft: 20 }}
            >
              <div
                className="stats-container text-center"
                style={{ padding: "1.25rem 9.375rem" }}
              >
                <h5>膿皮症</h5>
                <h5>平均每次治療金額</h5>
                <h4 className="own-orange" style={{ margin: 0 }}>
                  $3,000
                </h4>
              </div>
              <div>
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/pic/point-line.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-2  d-flex align-items-center pt-5">
              <ul className="list-unstyled" style={{ width: "100%" }}>
                <li className="d-flex justify-content-end mb-2">
                  <div
                    className="rounded-circle"
                    style={{ padding: 20, backgroundColor: "#FFF5CF" }}
                  >
                    <img loading="lazy" src="/pic/dog-stoma.png" alt="" />
                  </div>
                </li>
                <li
                  className="d-flex justify-content-start"
                  style={{ marginBottom: 50 }}
                >
                  <div
                    className="rounded-circle"
                    style={{ padding: 20, backgroundColor: "#FFF5CF" }}
                  >
                    <img loading="lazy" src="/pic/dog-heart.png" alt="" />
                  </div>
                </li>
                <li className="d-flex justify-content-start mb-2">
                  <div
                    className="rounded-circle"
                    style={{ padding: 20, backgroundColor: "#FFF5CF" }}
                  >
                    <img loading="lazy" src="/pic/dog-skin.png" alt="" />
                  </div>
                </li>
                <li className="d-flex justify-content-end mb-2">
                  <div
                    className="rounded-circle"
                    style={{ padding: 20, backgroundColor: "#FFF5CF" }}
                  >
                    <img loading="lazy" src="/pic/dog-accident.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div
                className="d-flex justify-content-start"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: 80
                }}
              >
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/pic/dog-for-sick02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-12" style={{ height: "7.5rem" }}>
            <img
              className="w-100 h-100"
              loading="lazy"
              src="/pic/section2-bottom-bar2.png"
              alt=""
            />
          </div>
        </div>
        {/* section 2 end */}

        {/* section 3 優點介紹 start */}
        <div className="container-fluid bg-image lowest-layer">
          <div className="row" style={{ padding: "0 60px" }}>
            <div className="col-12 d-flex justify-content-center">
              <ul
                className="list-unstyled d-inline-flex justify-content-around"
                style={{ height: "23.75rem" }}
              >
                <li className="col-2" style={{ paddingTop: 130 }}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="/pic/full-secur.png"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center mt-3">保障全面</h5>
                  <p className="text-center text-wrap">
                    涵蓋意外、疾病、手術等多種醫療費用，讓您的寵物在需要醫療時得到全面的保障。
                  </p>
                </li>
                <li className="col-2" style={{ paddingBottom: 130 }}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="/pic/fast-pay.png"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center  mt-3">理賠快速</h5>
                  <p className="text-center">
                    迅速處理您的理賠申請，減少等待時間，確保寵物及時獲得治療。
                  </p>
                </li>
                <li className="col-2" style={{ paddingBottom: 130 }}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="/pic/agile-project.png"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center  mt-3">方案靈活</h5>
                  <p className="text-center">
                    提供多樣化的保險方案，可以根據寵物的狀況以及您的預算，選擇最適合的方案。
                  </p>
                </li>
                <li className="col-2" style={{ paddingTop: 130 }}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="/pic/pro-service.png"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center  mt-3">專業客服</h5>
                  <p className="text-center">
                    擁有專業的客服團隊，隨時為您解答有關保險的各種疑問。讓您感到安心和滿意。
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 d-flex justify-content-center img-container">
              <img
                className="img-fluid lower-layer"
                loading="lazy"
                src="/pic/dogs-no-background1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* section 3 end */}

        {/* section 4 保險試算 start */}
        <div
          className="container-fluid d-flex flex-column justify-content-center"
          style={{ marginTop: "-8.125rem", backgroundColor: "white" }}
        >
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-8 mt-5">
              <h2
                className="d-flex justify-content-center text-color mt-5"
                style={{ color: 515151 }}
              >
                保險試算
              </h2>
            </div>
          </div>
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <button
                style={{ backgroundColor: "white" }}
                className=" border-0 no-outline"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#ModalCat"
              >
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/pic/cat-btn.png"
                  alt=""
                />
              </button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button
                style={{ backgroundColor: "white" }}
                className=" border-0 no-outline"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#ModalDog"
              >
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/pic/dog-btn.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        {/* section 4 end */}

        {/* section 5 顧客意見回饋 start */}
        <div className="container-fluid">
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-9">
              <h2
                className="d-flex justify-content-center text-color"
                style={{ color: 515151 }}
              >
                顧客意見回饋
              </h2>
            </div>
          </div>
          <div
            className="row d-flex flex-sm-column flex-md-row justify-content-center mt-5"
            style={{ padding: "0 3.75rem 0 3.75rem" }}
          >
            <div className="col-3 d-flex pentagon-container mb-5">
              <img
                src="/pic/customer-feedback01.jpg"
                alt="巨石(鬥牛犬)"
                className="pet-image"
              />
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="text-left">巨石(鬥牛犬) 1歲</h4>
                  <h6
                    className="text-left text-wrap"
                    style={{ width: "12.5rem", height: "6.25rem" }}
                  >
                    雖然有其他更便宜的寵物保險選擇，但寵度是最方便的。我很怕麻煩，所以我想以最完整方便的方式照顧它。
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-1" />
            <div className="col-3 d-flex pentagon-container mb-5">
              <img
                src="/pic/customer-feedback02.jpg"
                alt="米亞(虎斑貓)"
                className="pet-image"
              />
              <div className="d-flex align-items-center">
                <div>
                  <h4 className="text-left">米亞(虎斑貓) 3歲</h4>
                  <h6
                    className="text-left text-wrap"
                    style={{ width: "12.5rem", height: "6.25rem" }}
                  >
                    我小時候就知道寵物保險了。當我養了米亞時，它非常有幫助。價格非常合情合理。
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="own-btn2 border-0 d-flex justify-content-center align-items-center"
              style={{ marginTop: "1.875rem" }}
            >
              <h5 style={{ margin: 0 }}>了解更多回饋</h5>
            </button>
          </div>
        </div>
        {/* section 5 end */}
        {/* section 6 常見問題 start */}
        <div className="col-12 ">
          <img
            className="img-fluid w-100"
            loading="lazy"
            src="/pic/section6-top-bar2.png"
            alt=""
          />
        </div>        
        <div className="container-fluid mb-5 bg-image">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="d-flex justify-content-center align-items-center text-color">
                <img
                  className="img-fluid"
                  loading="lazy"
                  src="/pic/cat-paw.png"
                  alt=""
                />
                寵物保險常見問題
              </h2>
            </div>
            <div className="col-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button  collapsed"
                      style={{ backgroundColor: "#A2E5F8" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 className="text-color">
                        什麼類型的貓狗的都可以承保寵物險嗎? 是否有不承保項目?
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      不適用本專案:
                      <br />
                      <ul className="list-unstyled">
                        <li>1. 寵物年齡超過限制</li>
                        <li>2. 已患有疾病</li>
                        <li>
                          3.
                          寵物身體本身有缺陷(如:失明、四肢缺陷、出血、腹瀉、耳聾或體檢內容有異常項目等)
                        </li>
                        <li>4. 未植晶片</li>
                        <li>5. 寵物從事競賽、狩獵、特技表演等</li>
                        <li>6. 職業犬(警犬、搜救犬、導盲犬等)</li>
                        <li>
                          7.
                          法國鬥牛犬、比特犬(美國比特鬥牛犬、史大佛夏牛頭犬、斯塔福郡鬥牛梗、美國斯塔福郡梗)、日本土佐犬、紐波利頓犬、阿根廷杜告犬、巴西菲勒犬、獒犬(藏獒、馬士提夫獒犬、西藏獒犬、鬥牛獒犬、義大利獒犬、波爾多獒犬)
                        </li>
                        <li>8. 其他未列之項目本公司保留最終承保之權利</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      style={{ backgroundColor: "#A2E5F8" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h5 className="text-color">如果不知道寵物的年齡怎麼辦?</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      如您的寵物有施打晶片，可向附近之寵物登記站(動物醫院)查詢，並請如實填寫。
                      若不清楚日期，則請填寫寵物登記證出生年之12月31日即可。
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      style={{ backgroundColor: "#A2E5F8" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h5 className="text-color">該如何查詢寵物資料?</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li>
                          1. 可至寵物登記管理資訊網查詢相關資訊https://www.pet.gov.tw/
                        </li>
                        <li>
                          2.
                          飼主可憑身分證至就近的寵物登記站(動物醫院)進行資料的查詢，即可取得寵物晶片號碼與辦理寵物登記證補發和遺失申報。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button  collapsed"
                      style={{ backgroundColor: "#A2E5F8" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <h5 className="text-color">
                        晶片內的資料可以更換嗎?晶片如果是家人的名字，該如何投保?
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li>1. 要、被保人跟晶片飼主必須是同一人。</li>
                        <li>
                          2.
                          若不符合上述條件，需先辦理晶片號碼移轉，使得投保；或請該晶片之飼主自行投保。
                        </li>
                        <li>
                          3.
                          晶片移轉須至寵物登記站(動物醫院)辦理，且需攜帶原飼主&amp;新飼主身分證。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button  collapsed"
                      style={{ backgroundColor: "#A2E5F8" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      <h5 className="text-color">
                        寵物相關資料是否可以批改(如晶片號碼、品種、寵物名稱等)?
                        如欲申請批改應準備甚麼文件?
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li>
                          1.
                          僅可批改同一隻寵物的寵物名、寵物種類/品種/性別、晶片號碼、出生日期(寵物登記證上所載明之資訊)。
                        </li>
                        <li>2. 批改時必須提供新的寵物登記證影本。</li>
                        <li>
                          3.
                          如欲申請批改作業，請上網連結至國泰產險官網/保戶服務/保單專區/保單變更/加保，下載新種險批改申請書https://www.cathay-ins.com.tw/INSPFWeb/servlet/HttpDispatcher/PFA5_0200/prompt，簽名或蓋章並附上匯款帳號，寄送回寵度產險：台北市大安區仁愛路四段296號7樓(意外保險部新種險科)收。批改所需文件：1.
                          批改申請書 2. 寵物登記證影本。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 6 end */}


      </Layout>
    </>
  )
}
