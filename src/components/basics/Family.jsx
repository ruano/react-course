import FamilyMember from './FamilyMember'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <FamilyMember name="Pedro" lastName={props.lastName} />
            <FamilyMember name="Ana" {...props} />
            <FamilyMember name="Gustavo" lastName={props.lastName} />
        </div>
    )
}