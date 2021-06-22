import React from 'react';
import Aboutimage from '../images/organic-about-1.png';

function About() {
    return(
        <div className='about'>
        <div className='about-img'>
            <img src={Aboutimage} alt='img'/>
        </div>

        <div className='about-text'>
            <h3>Fresh Food,Simply <font>Delicious</font></h3>
            <p>lorem ispiisu huhf skjhd djfhud djfhjm jfhdfhdf jfijfmd
            kjifnmd jhfdm fjhjn dmsodijk mvhkf hfyufrhf jijrmui kji
            jfk jkfv gbngknb bnkbnk nbbknbk nkfnvkf fmnkfm mfnkfmkf fmnkfmvf f
            mnbkfmf kgjeir kjrijr kjirjrkm fkrjijf, vvivk vmvhjnvmd vmdjnv mdn jnvd
            huhnj ijk hndj ijfk hurhf y8fjri uyhjh uu h  hu7yi iyg8y8m.</p>
            <a href= '#' className='about-btn'>Read more</a>
        </div>
    </div>
    )
}

export default About;