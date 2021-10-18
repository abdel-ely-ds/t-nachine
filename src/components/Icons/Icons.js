import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcDocument, FcGoogle } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import { GrOptimize, GrServices, GrTest } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import styled from 'styled-components';

export const ServicesIcon = styled(GrServices)`
margin-right: .8rem;
`;

export const OptimizationIcon = styled(GrOptimize)`
margin-right: .8rem;
padding: 0px;
`;

export const BacktestIcon = styled(GrTest)`
margin-right: .8rem;
`;

export const AnalysisIcon = styled(SiSimpleanalytics)`
margin-right: .8rem;
`;


export const ArrowDown = styled(AiOutlineDown)`
margin-left: 0.4rem;
`;

export const ArrowUp = styled(AiOutlineUp)`
margin-left: 0.4rem;
`;

export const DocsIcon = styled(FcDocument)`
margin-right: .8rem;
`;

export const PricingIcon = styled(GiPriceTag)`
margin-right: .8rem;
`;

export const GoogleIcon = styled(FcGoogle)`
margin-right: .8rem;
font-size: 3rem;
`;

export const FbIcon = styled(FaFacebookF)`
margin-right: .8rem;
font-size: 3rem;
color: white;
`;