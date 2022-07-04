import React from 'react'
import { useTranslation } from 'react-i18next'


function Profile() {
    const { t } = useTranslation(["profile","common"])
    return (
        <div className="container mt-5">
            <h1 className='text-center'>{t("profile:header")}</h1>
            <h5>{t("name")}</h5>
        </div>
    )
}

export default Profile