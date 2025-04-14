interface BenefitCardProps {
    ctaText: string,
    ctaLink: string,
    image: string,
    title: string,
    description: string
};

const BenefitCard = ({ props }: { props: BenefitCardProps }) => {
    return (
        <>
            <div>
                <div className="relative overflow-hidden border rounded-3xl">
                    <img src={props.image} alt={props.title} className="z-10 f-full h-auto rounded-2xl border" />
                    <div className="z-30 absolute top-0 left-0 border border-red-500block w-full h-full bg-gradient-to-b from-slate-900/10 to-zinc-900/90">&nbsp;</div>
                    <a className="z-50 px-4 py-2 bg-white rounded-full font-bold text-sm absolute top-3 left-3" href={props.ctaLink} target="_blank">{ props.ctaText }</a>
                </div>
                <h3 className="font-bold text-2xl mt-2 ml-2">{ props.title }</h3>
                <p className="font-light text-sm mt-2 ml-2 break-words text-justify">{ props.description }</p>
            </div>
        </>
    );
};

export default BenefitCard;