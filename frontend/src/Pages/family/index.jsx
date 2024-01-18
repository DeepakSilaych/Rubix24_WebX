import React, { useState } from 'react';
import Layout from '../component/layout';
import style from './style.module.css';

function Family() {
  const [expandedMember, setExpandedMember] = useState(null);
  const [isAddMemberPopupOpen, setAddMemberPopupOpen] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState('');

  const toggleExpand = (memberId) => {
    setExpandedMember((prev) => (prev === memberId ? null : memberId));
  };

  const openAddMemberPopup = () => {
    setAddMemberPopupOpen(true);
  };

  const closeAddMemberPopup = () => {
    setAddMemberPopupOpen(false);
  };

  const handleNewMemberEmailChange = (e) => {
    setNewMemberEmail(e.target.value);
  };

  const handleAddMember = () => {
    console.log(newMemberEmail);
    closeAddMemberPopup();
  };

  return (
    <div>
      <Layout color={'rgb(70, 70, 0)'}>
        <div className={style.container}>
          <h1 className={style.title}>Family</h1>
          <div className={style.addmember}>
            <h2>Connected Family Members or Friends</h2>
            <button onClick={openAddMemberPopup}>Add New Member</button>
          </div>
          <div className={style.member}>
            <div className={style.memberlist}>
              {data.map((member) => (
                <div className={`${style.membercard} ${expandedMember === member.id && style.membercardexpanded}`} key={member.id}>
                  <div className={style.membername}>{member.name}</div>
                  <div className={style.memberemail}>{member.email}</div>
                  <div className={style.memberott}>
                    {member.ott.slice(0, expandedMember === member.id ? member.ott.length : 6).map((ott, index) => (
                      <div className={style.ott} key={index}>
                        {ott}
                      </div>
                    ))}
                  </div>
                  {member.ott.length > 6 ? (
                    <button className={style.showMoreButton} onClick={() => toggleExpand(member.id)}>
                      {expandedMember === member.id ? 'Show Less' : 'Show More'}
                    </button>
                  ) : (
                    <div className={style.showMoreButton} />
                  )}
                </div>
              ))}
            </div>
          </div>
          {isAddMemberPopupOpen && (
          <div className={style.addMemberPopupContainer}>
            <div className={style.addMemberPopup}>
              <div>
                <label>Member's Email:</label>
                <input type="email" value={newMemberEmail} onChange={handleNewMemberEmailChange} placeholder='example@mail.com'/>
              </div>
              <button onClick={handleAddMember}>Add</button>
              <button onClick={closeAddMemberPopup}>Cancel</button>
            </div>
          </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Family;


const data = [
  {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@gmial.com",
    "ott": [ "Netflix", "Amazon Prime", "Hotstar", "Youtube", "BrosPlay", "Ullu", "Voot", "Zee5", "Sony Liv", "Disney+ Hotstar" ]
  },
  {
    "id": 2,
    "name": "Anjali",
    "email": "anjali@gmail.com",
    "ott": [ "Netflix", "Amazon Prime", "Youtube" ]
  },
  {
    "id": 3,
    "name": "Rohan",
    "email": "rohan@gmial.com",
    "ott": [ "Ullu", "Amazon Prime", "BrosPlay" ]
  },
  {
    "id": 4,
    "name": "Karan",
    "email": "karan@gmail.com",
    "ott": [ "Netflix", "Amazon Prime", "Hotstar" ]
  },
]