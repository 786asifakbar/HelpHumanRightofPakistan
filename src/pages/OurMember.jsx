import CenterExecutiveCommunityMember from "./CenterExecutiveCommunityMember"
import LegalAidCommunityMember from "./LegalAidCommunityMember"
import EducationCommunityMember from './EducationCommunityMember'
import HealthCommunityMember from './HealthCommunityMember'
import FundRaisingCommunityMember from './FundRaisingCommunityMember'
import ITDepartmentMember from './ITDepartmentMember'


function OurMember() {
  return (
    <>
    <CenterExecutiveCommunityMember/>
    <LegalAidCommunityMember/>
    <EducationCommunityMember/>
    <HealthCommunityMember />
    <FundRaisingCommunityMember/>
    <ITDepartmentMember/>
    
    </>
  )
}

export default OurMember