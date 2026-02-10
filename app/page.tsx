                  minLength={6}
                  className="w-full bg-slate-800 border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 rounded-xl font-bold transition-colors text-lg">
              Create Account
            </button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={handleStartLogin} 
                className="text-violet-400 hover:text-violet-300 font-bold"
              >
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ONBOARDING STEP 1
  if (currentView === 'onboarding_step1') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-violet-600/20 rounded-2xl mb-4">
              <GraduationCap size={40} className="text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
            <p className="text-gray-400">Our AI needs this information to provide personalized guidance</p>
          </div>

          <form onSubmit={handleCompleteOnboarding} className="space-y-6 bg-slate-900 p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                  placeholder="John Doe"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Current Degree</label>
                <select
                  value={userProfile.currentDegree}
                  onChange={(e) => setUserProfile({...userProfile, currentDegree: e.target.value})}
                  className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 outline-none cursor-pointer"
                >
                  <option>Bachelor's in Computer Science</option>
                  <option>Bachelor's in Engineering</option>
                  <option>Bachelor's in Business</option>
                  <option>Bachelor's in Arts</option>
                  <option>High School Diploma</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Target Major</label>
                <select
                  value={userProfile.targetMajor}
                  onChange={(e) => setUserProfile({...userProfile, targetMajor: e.target.value})}
                  className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 outline-none cursor-pointer"
                >
                  <option>Computer Science</option>
                  <option>Engineering</option>
                  <option>Business / MBA</option>
                  <option>Medicine</option>
                  <option>Law</option>
                  <option>Arts & Humanities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your GPA</label>
                <input
                  type="text"
                  value={userProfile.gpa}
                  onChange={(e) => setUserProfile({...userProfile, gpa: e.target.value})}
                  placeholder="e.g. 3.8"
                  required
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Target Country</label>
                <select
                  value={userProfile.targetCountry}
                  onChange={(e) => setUserProfile({...userProfile, targetCountry: e.target.value})}
                  className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 outline-none cursor-pointer"
                >
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>Australia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Source</label>
                <select
                  value={userProfile.budgetSource}
                  onChange={(e) => setUserProfile({...userProfile, budgetSource: e.target.value})}
                  className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 outline-none cursor-pointer"
                >
                  <option>Self</option>
                  <option>Scholarship</option>
                  <option>Loan</option>
                  <option>Self + Scholarship</option>
                  <option>Self + Loan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Max Annual Budget: ${userProfile.budget.toLocaleString()}</label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={userProfile.budget}
                onChange={(e) => setUserProfile({...userProfile, budget: Number(e.target.value)})}
                className="w-full accent-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Exam Readiness (IELTS/TOEFL/GRE)</label>
              <select
                value={userProfile.examStatus}
                onChange={(e) => setUserProfile({...userProfile, examStatus: e.target.value})}
                className="w-full bg-slate-800 text-white border border-white/10 rounded-xl px-4 py-3 outline-none cursor-pointer"
              >
                <option>Not taken yet</option>
                <option>Booked / Planning to take</option>
                <option>Taken (Results Awaited)</option>
                <option>Taken (Have Score)</option>
              </select>
            </div>

            <button type="submit" className="w-full py-4 bg-violet-600 hover:bg-violet-700 rounded-xl font-bold transition-colors text-lg">
              Complete Profile & Enter Dashboard →
            </button>
          </form>
        </div>
      </div>
    );
  }

  // DASHBOARD WITH STAGE INDICATOR
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex justify-between items-center mb-8">
          <button onClick={handleLogoClick} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Sparkles size={28} className="text-violet-400" />
            <h1 className="text-2xl font-bold">ZenithPath</h1>
          </button>
          <button onClick={handleSignOut} className="text-sm text-gray-400 hover:text-white">Sign Out</button>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* STAGE INDICATOR */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 mb-8">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Your Journey Progress</h3>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStage === 'profile_built' || currentStage === 'university_locked' || currentStage === 'application_submitted'
                    ? 'bg-green-500' 
                    : 'bg-white/10'
                }`}>
                  {currentStage === 'profile_built' || currentStage === 'university_locked' || currentStage === 'application_submitted' ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <span className="text-sm font-bold">1</span>
                  )}
                </div>
                <span className="text-sm font-medium">Profile Built</span>
              </div>

              <div className={`flex-1 h-1 mx-4 ${
                currentStage === 'university_locked' || currentStage === 'application_submitted'
                  ? 'bg-green-500'
                  : 'bg-white/10'
              }`}></div>

              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStage === 'university_locked' || currentStage === 'application_submitted'
                    ? 'bg-green-500'
                    : currentStage === 'profile_built'
                    ? 'bg-violet-500 animate-pulse'
                    : 'bg-white/10'
                }`}>
                  {currentStage === 'university_locked' || currentStage === 'application_submitted' ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <span className="text-sm font-bold">2</span>
                  )}
                </div>
                <span className="text-sm font-medium">University Locked</span>
              </div>

              <div className={`flex-1 h-1 mx-4 ${
                currentStage === 'application_submitted'
                  ? 'bg-green-500'
                  : 'bg-white/10'
              }`}></div>

              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStage === 'application_submitted'
                    ? 'bg-green-500'
                    : currentStage === 'university_locked'
                    ? 'bg-violet-500 animate-pulse'
                    : 'bg-white/10'
                }`}>
                  {currentStage === 'application_submitted' ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <span className="text-sm font-bold">3</span>
                  )}
                </div>
                <span className="text-sm font-medium">Application Submitted</span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-400">
              Current Stage: <span className="text-violet-400 font-bold">
                {currentStage === 'profile_built' && 'Discovery Phase - Find Your Universities'}
                {currentStage === 'university_locked' && `Application Phase - ${lockedUni?.name}`}
                {currentStage === 'application_submitted' && 'Submitted - Awaiting Results'}
              </span>
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 p-6 rounded-2xl border border-violet-500/30">
              <h2 className="text-2xl font-bold mb-1">Welcome, {userProfile.name}</h2>
              <p className="text-gray-300">
                {currentStage === 'profile_built' && "Let's find the perfect universities for you!"}
                {currentStage === 'university_locked' && `Complete your tasks to apply to ${lockedUni?.name}`}
                {currentStage === 'application_submitted' && "Your application is being reviewed"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <button onClick={() => setCurrentView('search')} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-left">
                <Search size={24} className="mb-2 text-violet-400" />
                <h3 className="font-bold">Discover Universities</h3>
                <p className="text-sm text-gray-400">Browse 5,000+ universities</p>
              </button>

              <button onClick={() => setCurrentView('ai_chat')} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-left">
                <Bot size={24} className="mb-2 text-green-400" />
                <h3 className="font-bold">ZenithPath Chat</h3>
                <p className="text-sm text-gray-400">Get personalized guidance</p>
              </button>
            </div>
          </div>

          {/* PROFILE STATS */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-1">Academic Score</p>
              <p className="text-3xl font-bold">{userProfile.gpa} / 4.0</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-1">Estimated Budget</p>
              <p className="text-3xl font-bold">${(userProfile.budget / 1000).toFixed(0)}k</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-1">{lockedUni ? 'Locked University' : 'Shortlisted'}</p>
              <p className="text-3xl font-bold">{lockedUni ? '1' : shortlistedUnis.length}</p>
            </div>
          </div>

          {/* LOCKED UNIVERSITY SECTION */}
          {lockedUni && (
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30 mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lock size={20} className="text-green-400" />
                    <h3 className="text-xl font-bold">Locked University</h3>
                  </div>
                  <p className="text-2xl font-bold text-green-400">{lockedUni.name}</p>
                  <p className="text-gray-300">{lockedUni.country} • {lockedUni.major}</p>
                </div>
                <button 
                  onClick={() => setCurrentView('application_guide')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-bold transition-colors"
                >
                  View Application Tasks →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // UNIVERSITY SEARCH
  if (currentView === 'search') {
    const filteredUnis = UNIVERSITY_DATABASE.filter(uni => 
      (selectedCountry === 'All' || uni.country === selectedCountry) && 
      uni.cost <= budgetLimit &&
      uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setCurrentView('dashboard')} className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Discover Universities</h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search by Name</label>
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search universities..."
                  className="w-full bg-slate-800 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <div className="flex gap-2 flex-wrap">
                {['All', 'USA', 'UK', 'Germany', 'Canada', 'Switzerland'].map(c => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-4 py-2 rounded-lg text-sm ${selectedCountry === c ? 'bg-violet-600' : 'bg-slate-800 hover:bg-white/5'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnis.map(uni => {
              const { category, likelihood, riskLevel } = categorizeUniversity(parseFloat(userProfile.gpa), uni.avgGpa);
              const isLocked = lockedUni?.id === uni.id;
              const isShortlisted = shortlistedUnis.find(u => u.id === uni.id);

              return (
                <div key={uni.id} className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-violet-500/50 transition-colors">
                  <div className="relative h-48 bg-gradient-to-br from-violet-600/20 to-emerald-600/20">
                    <img 
                      src={uni.image} 
                      alt={uni.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-slate-950/80 rounded-full text-xs font-bold">
                      Rank #{uni.rank}
                    </div>
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                      category === 'Safe' ? 'bg-green-500/80' : 
                      category === 'Dream' ? 'bg-red-500/80' : 
                      'bg-yellow-500/80'
                    }`}>
                      {category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{uni.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      <Globe size={14} className="inline mr-1" />
                      {uni.country} • {uni.major}
                    </p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Acceptance Likelihood:</span>
                        <span className="font-bold text-violet-400">{likelihood}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Risk Level:</span>
                        <span className={`font-bold ${
                          riskLevel === 'Low Risk' ? 'text-green-400' : 
                          riskLevel === 'High Risk' ? 'text-red-400' : 
                          'text-yellow-400'
                        }`}>{riskLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tuition:</span>
                        <span className="font-bold">${uni.cost.toLocaleString()}/yr</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {isLocked ? (
                        <button
                          onClick={() => setCurrentView('application_guide')}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-1"
                        >
                          <Lock size={16} />
                          Locked
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleShortlistUniversity(uni)}
                            disabled={!!isShortlisted}
                            className={`flex-1 py-2 rounded-lg font-bold transition-colors ${
                              isShortlisted 
                                ? 'bg-white/10 text-gray-400 cursor-not-allowed' 
                                : 'bg-white/10 hover:bg-white/20'
                            }`}
                          >
                            {isShortlisted ? 'Shortlisted' : 'Shortlist'}
                          </button>
                          <button
                            onClick={() => handleLockUniversity(uni)}
                            className="flex-1 bg-violet-600 hover:bg-violet-700 py-2 rounded-lg font-bold transition-colors"
                          >
                            Lock
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // APPLICATION GUIDE (GATED - ONLY VISIBLE AFTER LOCKING)
  if (currentView === 'application_guide') {
    if (!lockedUni) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
          <div className="text-center">
            <Lock size={64} className="mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold mb-2">No University Locked</h2>
            <p className="text-gray-400 mb-6">Please lock a university first to access application guidance.</p>
            <button
              onClick={() => setCurrentView('search')}
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-bold transition-colors"
            >
              Browse Universities
            </button>
          </div>
        </div>
      );
    }

    const completedTasks = tasks.filter(t => t.completed).length;
    const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;
    const allTasksCompleted = progress === 100;

    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setCurrentView('dashboard')} className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <ListChecks size={28} className="text-green-400" />
          <h1 className="text-2xl font-bold">Application Guide</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Locked University Header */}
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-2xl border border-green-500/30 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lock size={20} className="text-green-400" />
                  <span className="text-sm font-medium text-green-400">LOCKED UNIVERSITY</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">{lockedUni.name}</h2>
                <p className="text-gray-300">{lockedUni.country} • {lockedUni.major} • ${lockedUni.cost.toLocaleString()}/year</p>
              </div>
              <button
                onClick={() => setShowUnlockWarning(true)}
                className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-xl font-bold border border-red-500/30 transition-colors flex items-center gap-2"
              >
                <Unlock size={16} />
                Unlock
              </button>
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Application Progress</span>
                <span className="text-sm font-bold">{completedTasks} / {tasks.length} tasks completed</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileCheck size={24} className="text-violet-400" />
              Mandatory To-Dos
            </h3>

            <div className="space-y-4">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  className={`p-4 rounded-xl border transition-all ${
                    task.completed 
                      ? 'bg-green-600/10 border-green-500/30' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => handleToggleTask(task.id)}
                      className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                        task.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-white/30 hover:border-violet-500'
                      }`}
                    >
                      {task.completed && <Check size={16} className="text-white" />}
                    </button>

                    <div className="flex-1">
                      <h4 className={`font-bold mb-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                      </h4>
                      <p className={`text-sm ${task.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {task.description}
                      </p>
                    </div>

                    <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg text-sm font-bold transition-colors">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON - ONLY ENABLED WHEN ALL TASKS COMPLETED */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Ready to Submit?</h3>
                <p className="text-sm text-gray-400">
                  {allTasksCompleted 
                    ? 'All tasks completed! You can now submit your application.' 
                    : `Complete all ${tasks.length} tasks to unlock the submit button.`}
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmitApplication}
              disabled={!allTasksCompleted}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                allTasksCompleted
                  ? 'bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 cursor-pointer'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              {allTasksCompleted ? '🎉 Submit Final Application' : '🔒 Complete All Tasks to Submit'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // AI CHAT
  if (currentView === 'ai_chat') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setCurrentView('dashboard')} className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-600/20 rounded-xl">
              <Bot size={24} className="text-green-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold">ZenithPath</h1>
              <p className="text-sm text-gray-400">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online • Personalized Guidance
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-200px)]">
          <div className="flex-1 overflow-y-auto mb-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-violet-600' 
                    : 'bg-slate-900 border border-white/10'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  
                  {msg.type === 'recommendation' && msg.data && (
                    <div className="mt-4 space-y-3">
                      {msg.data.map((uni: any) => (
                        <div key={uni.id} className="p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold">{uni.name}</h4>
                              <p className="text-sm text-gray-400">{uni.country} • Rank #{uni.rank}</p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              uni.category === 'Safe' ? 'bg-green-500/20 text-green-400' :
                              uni.category === 'Dream' ? 'bg-red-500/20 text-red-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {uni.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mb-2">Likelihood: {uni.likelihood}</p>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleShortlistUniversity(uni)}
                              className="flex-1 bg-white/10 hover:bg-white/20 text-xs py-2 rounded-lg font-medium transition-colors"
                            >
                              Shortlist
                            </button>
                            <button 
                              onClick={() => handleLockUniversity(uni)}
                              className="flex-1 bg-violet-600/80 hover:bg-violet-600 text-white text-xs py-2 rounded-lg font-medium transition-colors"
                            >
                              Lock
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Try 'Lock Stanford' or 'Analyze my profile'..."
              className="flex-1 bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            />
            <button type="submit" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-bold transition-colors">
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // VISA TOOL
  if (currentView === 'visa_tool') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setCurrentView('landing')} className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <Plane size={28} className="text-blue-400" />
          <h1 className="text-2xl font-bold">AI Visa Predictor</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
            {!visaResult ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Check Your Approval Chances</h2>
                  <p className="text-gray-400">Our AI analyzes thousands of past visa interviews to predict your success rate.</p>
                </div>

                <form onSubmit={handleCalculateVisa} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">I am from</label>
                      <div className="relative">
                        <Globe size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select 
                          value={visaOrigin}
                          onChange={(e) => setVisaOrigin(e.target.value)}
                          className="w-full bg-slate-800 text-white border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none cursor-pointer"
                        >
                          <option>India</option>
                          <option>China</option>
                          <option>Nigeria</option>
                          <option>Brazil</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Going to</label>
                      <div className="relative">
                        <Plane size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select 
                          value={visaTarget}
                          onChange={(e) => setVisaTarget(e.target.value)}
                          className="w-full bg-slate-800 text-white border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none cursor-pointer"
                        >
                          <option>USA (F1 Visa)</option>
                          <option>UK (Student Route)</option>
                          <option>Canada (Study Permit)</option>
                          <option>Germany (Student Visa)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-sm text-blue-300">
                      <ShieldCheck size={16} className="inline mr-2" />
                      The AI will also check recent embassy rejection trends for {visaOrigin} citizens applying to {visaTarget}.
                    </p>
                  </div>

                  <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-colors">
                    Analyze Probability
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <svg className="w-32 h-32" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="#1f2937" strokeWidth="8" />
                      <circle 
                        cx="60" cy="60" r="54" fill="none" 
                        stroke="#10b981" strokeWidth="8"
                        strokeDasharray={`${(visaResult / 100) * 339.292} 339.292`}
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">{visaResult}%</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-green-400">High Approval Chance</h2>
                <p className="text-gray-300 mb-8">
                  Great news! Based on current trends for {visaOrigin} to {visaTarget}, your probability is excellent.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Risk Factors</p>
                    <p className="text-xl font-bold text-green-400">✓ Low Risk</p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-sm text-gray-400 mb-1">Interview Wait</p>
                    <p className="text-xl font-bold text-blue-400">~ 12 Days</p>
                  </div>
                </div>

                <button onClick={() => setVisaResult(null)} className="text-gray-500 hover:text-white underline text-sm mb-4">
                  Check another country
                </button>
                <button 
                  onClick={() => setCurrentView('quick_form')}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold text-lg transition-colors"
                >
                  Start Application Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // SCHOLARSHIPS
  if (currentView === 'scholarships') {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setCurrentView('landing')} className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <DollarSign size={28} className="text-yellow-400" />
          <h1 className="text-2xl font-bold">Scholarship Matcher</h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Find Financial Aid</h2>
            <p className="text-gray-400">Based on your region, here are the top grants you are eligible for.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOLARSHIP_DATABASE.map((sch) => {
              const isChecking = checkingScholarshipId === sch.id;
              const score = scholarshipScores[sch.id];

              return (
                <div key={sch.id} className="bg-slate-900 p-6 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{sch.name}</h3>
                      <p className="text-2xl font-bold text-emerald-400">{sch.amount}</p>
                    </div>
                    <span className="px-3 py-1 bg-violet-600/20 text-violet-400 rounded-full text-sm font-bold">
                      {sch.country}
                    </span>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-400 mb-6">
                    <span><Calendar size={14} className="inline mr-1" /> Deadline: {sch.deadline}</span>
                    <span><Tag size={14} className="inline mr-1" /> {sch.type}</span>
                  </div>

                  <button
                    onClick={() => score ? handleScholarshipApply(sch) : handleCheckEligibility(sch.id)}
                    disabled={isChecking}
                    className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2
                      ${score 
                        ? 'bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 text-white' 
                        : 'bg-white text-black hover:bg-gray-200'}
                    `}
                  >
                    {isChecking ? (
                      <><Loader2 size={18} className="animate-spin" /> Checking Criteria...</>
                    ) : score ? (
                      <><Check size={18} /> {score}% Match - Apply Now</>
                    ) : (
                      "Check Eligibility"
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==================== LANDING PAGE ====================
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <button onClick={handleLogoClick} className="flex items-center gap-2">
          <Sparkles size={28} className="text-violet-400" />
          <span className="text-xl font-bold">ZenithPath</span>
        </button>
        <div className="flex gap-4">
          <button 
            onClick={handleStartLogin}
            className="px-6 py-3 text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={handleStartSignup}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 rounded-xl font-bold transition-colors"
          >
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Your Path to Global Education
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          AI-powered university discovery and scholarship matching. 
          We analyze your visa chances in seconds.
        </p>
        <button
          onClick={handleStartSignup}
          className="px-8 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 rounded-xl font-bold text-lg transition-colors inline-flex items-center gap-2"
        >
          Start Your Journey <ArrowRight size={20} />
        </button>
      </main>

      {/* Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => setCurrentView('search')}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <Search size={32} className="text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Smart Discovery</h3>
            <p className="text-gray-400">
              Filter 5,000+ universities by budget, major, and location instantly.
            </p>
          </button>
          
          <button 
            onClick={() => setCurrentView('visa_tool')}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <Plane size={32} className="text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Visa Prediction</h3>
            <p className="text-gray-400">
              Our AI analyzes your profile to predict visa approval chances.
            </p>
          </button>
          
          <button 
            onClick={() => setCurrentView('scholarships')}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <DollarSign size={32} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Scholarships</h3>
            <p className="text-gray-400">
              Automatically match with grants and financial aid you qualify for.
            </p>
          </button>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative z-10 py-20 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-400">Join thousands of students who achieved their dreams with ZenithPath</p>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-6 animate-marquee">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
            <div key={idx} className="min-w-[400px] bg-slate-900 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.university}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe size={14} />
                Now studying in {testimonial.country}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-violet-400 mb-2">10k+</p>
            <p className="text-gray-400">Students Helped</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-400 mb-2">98%</p>
            <p className="text-gray-400">Visa Success</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-yellow-400 mb-2">$2M+</p>
            <p className="text-gray-400">Scholarships Found</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-purple-400 mb-2">50+</p>
            <p className="text-gray-400">Countries Supported</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-gray-500">
          © 2026 ZenithPath. All rights reserved. • Built for Hackathon
        </p>
      </footer>
    </div>
  );
}

// ==================== PRISMA SCHEMA (PostgreSQL) ====================
/*
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id               String            @id @default(cuid())
  email            String            @unique
  name             String
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
  
  academicProfile  AcademicProfile?
  lockedUniversities LockedUniversity[]
  tasks            Task[]
  shortlistedUnis  ShortlistedUniversity[]
}

model AcademicProfile {
  id              String   @id @default(cuid())
  userId          String   @unique
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  currentDegree   String
  targetMajor     String
  gpa             Float
  targetCountry   String
  targetDegree    String
  budget          Int
  budgetSource    String
  examStatus      String
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model University {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  country     String
  major       String
  cost        Int
  rank        Int
  avgGpa      Float
  imageUrl    String
  description String
  
  locked      LockedUniversity[]
  shortlisted ShortlistedUniversity[]
}

model LockedUniversity {
  id            String      @id @default(cuid())
  userId        String
  user          User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  universityId  Int
  university    University  @relation(fields: [universityId], references: [id], onDelete: Cascade)
  
  lockedAt      DateTime    @default(now())
  
  @@unique([userId, universityId])
}

model ShortlistedUniversity {
  id            String      @id @default(cuid())
  userId        String
  user          User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  universityId  Int
  university    University  @relation(fields: [universityId], references: [id], onDelete: Cascade)
  
  addedAt       DateTime    @default(now())
  
  @@unique([userId, universityId])
}

model Task {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  title         String
  description   String
  completed     Boolean  @default(false)
  universityId  Int?
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
*/
